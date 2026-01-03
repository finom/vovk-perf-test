import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nars")
export default class NarController {
  @operation({
    summary: "Get Nars",
  })
  @get()
  static getNars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nar",
  })
  @post("{id}")
  static createNar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
