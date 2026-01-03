import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiys")
export default class JiyController {
  @operation({
    summary: "Get Jiys",
  })
  @get()
  static getJiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiy",
  })
  @post("{id}")
  static createJiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
