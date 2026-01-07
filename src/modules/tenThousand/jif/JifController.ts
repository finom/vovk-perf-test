import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jif")
export default class JifController {
  @operation({
    summary: "Get Jif",
  })
  @get()
  static getJif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jif",
  })
  @post("{id}")
  static createJif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
