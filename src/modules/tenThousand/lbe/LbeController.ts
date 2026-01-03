import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbes")
export default class LbeController {
  @operation({
    summary: "Get Lbes",
  })
  @get()
  static getLbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbe",
  })
  @post("{id}")
  static createLbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
