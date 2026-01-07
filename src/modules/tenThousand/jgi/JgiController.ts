import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgi")
export default class JgiController {
  @operation({
    summary: "Get Jgi",
  })
  @get()
  static getJgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgi",
  })
  @post("{id}")
  static createJgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
