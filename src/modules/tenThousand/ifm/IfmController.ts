import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifm")
export default class IfmController {
  @operation({
    summary: "Get Ifm",
  })
  @get()
  static getIfm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifm",
  })
  @post("{id}")
  static createIfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
