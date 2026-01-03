import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifbs")
export default class IfbController {
  @operation({
    summary: "Get Ifbs",
  })
  @get()
  static getIfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifb",
  })
  @post("{id}")
  static createIfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
