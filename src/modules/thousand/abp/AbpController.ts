import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abps")
export default class AbpController {
  @operation({
    summary: "Get Abps",
  })
  @get()
  static getAbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abp",
  })
  @post("{id}")
  static createAbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
