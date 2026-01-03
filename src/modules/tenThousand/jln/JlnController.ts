import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlns")
export default class JlnController {
  @operation({
    summary: "Get Jlns",
  })
  @get()
  static getJlns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jln",
  })
  @post("{id}")
  static createJln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
