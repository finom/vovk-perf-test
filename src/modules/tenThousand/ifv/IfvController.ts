import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifv")
export default class IfvController {
  @operation({
    summary: "Get Ifv",
  })
  @get()
  static getIfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifv",
  })
  @post("{id}")
  static createIfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
