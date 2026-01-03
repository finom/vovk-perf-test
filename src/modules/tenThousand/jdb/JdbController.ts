import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdbs")
export default class JdbController {
  @operation({
    summary: "Get Jdbs",
  })
  @get()
  static getJdbs = procedure({
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
