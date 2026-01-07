import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrv")
export default class JrvController {
  @operation({
    summary: "Get Jrv",
  })
  @get()
  static getJrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrv",
  })
  @post("{id}")
  static createJrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
