import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lirs")
export default class LirController {
  @operation({
    summary: "Get Lirs",
  })
  @get()
  static getLirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lir",
  })
  @post("{id}")
  static createLir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
