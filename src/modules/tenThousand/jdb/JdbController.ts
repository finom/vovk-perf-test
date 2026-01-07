import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdb")
export default class JdbController {
  @operation({
    summary: "Get Jdb",
  })
  @get()
  static getJdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdb",
  })
  @post("{id}")
  static createJdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
