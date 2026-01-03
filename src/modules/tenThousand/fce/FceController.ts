import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fces")
export default class FceController {
  @operation({
    summary: "Get Fces",
  })
  @get()
  static getFces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fce",
  })
  @post("{id}")
  static createFce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
