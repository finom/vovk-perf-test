import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivu")
export default class IvuController {
  @operation({
    summary: "Get Ivu",
  })
  @get()
  static getIvu = procedure({
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
