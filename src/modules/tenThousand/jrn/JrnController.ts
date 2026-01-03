import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrns")
export default class JrnController {
  @operation({
    summary: "Get Jrns",
  })
  @get()
  static getJrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrn",
  })
  @post("{id}")
  static createJrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
