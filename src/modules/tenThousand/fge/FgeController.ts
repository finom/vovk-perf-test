import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fge")
export default class FgeController {
  @operation({
    summary: "Get Fge",
  })
  @get()
  static getFge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fge",
  })
  @post("{id}")
  static createFge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
