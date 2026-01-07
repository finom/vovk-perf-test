import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctj")
export default class CtjController {
  @operation({
    summary: "Get Ctj",
  })
  @get()
  static getCtj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctj",
  })
  @post("{id}")
  static createCtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
