import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jad")
export default class JadController {
  @operation({
    summary: "Get Jad",
  })
  @get()
  static getJad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jad",
  })
  @post("{id}")
  static createJad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
