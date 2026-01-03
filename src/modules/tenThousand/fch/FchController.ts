import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fches")
export default class FchController {
  @operation({
    summary: "Get Fches",
  })
  @get()
  static getFches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fch",
  })
  @post("{id}")
  static createFch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
