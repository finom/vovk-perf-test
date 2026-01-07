import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjt")
export default class JjtController {
  @operation({
    summary: "Get Jjt",
  })
  @get()
  static getJjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjt",
  })
  @post("{id}")
  static createJjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
