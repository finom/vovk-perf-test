import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jffs")
export default class JffController {
  @operation({
    summary: "Get Jffs",
  })
  @get()
  static getJffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jff",
  })
  @post("{id}")
  static createJff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
