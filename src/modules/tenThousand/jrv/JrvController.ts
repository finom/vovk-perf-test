import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrvs")
export default class JrvController {
  @operation({
    summary: "Get Jrvs",
  })
  @get()
  static getJrvs = procedure({
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
