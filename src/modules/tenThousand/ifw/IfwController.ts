import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifw")
export default class IfwController {
  @operation({
    summary: "Get Ifw",
  })
  @get()
  static getIfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifw",
  })
  @post("{id}")
  static createIfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
