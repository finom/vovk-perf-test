import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bza")
export default class BzaController {
  @operation({
    summary: "Get Bza",
  })
  @get()
  static getBza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bza",
  })
  @post("{id}")
  static createBza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
