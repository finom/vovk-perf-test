import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzws")
export default class BzwController {
  @operation({
    summary: "Get Bzws",
  })
  @get()
  static getBzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzw",
  })
  @post("{id}")
  static createBzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
