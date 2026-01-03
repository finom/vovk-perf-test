import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctps")
export default class CtpController {
  @operation({
    summary: "Get Ctps",
  })
  @get()
  static getCtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctp",
  })
  @post("{id}")
  static createCtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
