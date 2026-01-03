import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivus")
export default class IvuController {
  @operation({
    summary: "Get Ivus",
  })
  @get()
  static getIvus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivu",
  })
  @post("{id}")
  static createIvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
