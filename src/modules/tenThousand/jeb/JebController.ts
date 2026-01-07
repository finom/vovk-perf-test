import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeb")
export default class JebController {
  @operation({
    summary: "Get Jeb",
  })
  @get()
  static getJeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeb",
  })
  @post("{id}")
  static createJeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
