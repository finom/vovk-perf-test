import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nijs")
export default class NijController {
  @operation({
    summary: "Get Nijs",
  })
  @get()
  static getNijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nij",
  })
  @post("{id}")
  static createNij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
