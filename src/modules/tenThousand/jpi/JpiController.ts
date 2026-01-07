import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpi")
export default class JpiController {
  @operation({
    summary: "Get Jpi",
  })
  @get()
  static getJpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpi",
  })
  @post("{id}")
  static createJpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
