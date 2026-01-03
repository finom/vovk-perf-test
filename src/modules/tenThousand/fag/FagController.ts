import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fags")
export default class FagController {
  @operation({
    summary: "Get Fags",
  })
  @get()
  static getFags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fag",
  })
  @post("{id}")
  static createFag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
