import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jems")
export default class JemController {
  @operation({
    summary: "Get Jems",
  })
  @get()
  static getJems = procedure({
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
