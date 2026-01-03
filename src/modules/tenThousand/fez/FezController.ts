import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fezs")
export default class FezController {
  @operation({
    summary: "Get Fezs",
  })
  @get()
  static getFezs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fez",
  })
  @post("{id}")
  static createFez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
