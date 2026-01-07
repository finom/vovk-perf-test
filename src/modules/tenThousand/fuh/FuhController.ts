import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuh")
export default class FuhController {
  @operation({
    summary: "Get Fuh",
  })
  @get()
  static getFuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuh",
  })
  @post("{id}")
  static createFuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
