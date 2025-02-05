﻿using Abp.AutoMapper;
using Quaestor.Bot.Authentication.External;

namespace Quaestor.Bot.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
