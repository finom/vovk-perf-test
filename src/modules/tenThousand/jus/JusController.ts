import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juses")
export default class JusController {
  @operation({
    summary: "Get Juses",
  })
  @get()
  static getJuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jus",
  })
  @post("{id}")
  static createJus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
