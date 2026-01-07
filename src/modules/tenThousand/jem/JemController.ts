import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jem")
export default class JemController {
  @operation({
    summary: "Get Jem",
  })
  @get()
  static getJem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jem",
  })
  @post("{id}")
  static createJem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
