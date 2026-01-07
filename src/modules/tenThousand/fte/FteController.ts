import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fte")
export default class FteController {
  @operation({
    summary: "Get Fte",
  })
  @get()
  static getFte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fte",
  })
  @post("{id}")
  static createFte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
