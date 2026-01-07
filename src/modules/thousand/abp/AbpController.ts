import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abp")
export default class AbpController {
  @operation({
    summary: "Get Abp",
  })
  @get()
  static getAbp = procedure({
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
