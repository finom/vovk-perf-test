import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loa")
export default class LoaController {
  @operation({
    summary: "Get Loa",
  })
  @get()
  static getLoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loa",
  })
  @post("{id}")
  static createLoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
