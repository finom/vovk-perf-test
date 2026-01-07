import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdd")
export default class JddController {
  @operation({
    summary: "Get Jdd",
  })
  @get()
  static getJdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdd",
  })
  @post("{id}")
  static createJdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
