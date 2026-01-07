import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctq")
export default class CtqController {
  @operation({
    summary: "Get Ctq",
  })
  @get()
  static getCtq = procedure({
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
