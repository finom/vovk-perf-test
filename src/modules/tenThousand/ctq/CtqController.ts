import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctqs")
export default class CtqController {
  @operation({
    summary: "Get Ctqs",
  })
  @get()
  static getCtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctq",
  })
  @post("{id}")
  static createCtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
