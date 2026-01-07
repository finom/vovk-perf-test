import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foy")
export default class FoyController {
  @operation({
    summary: "Get Foy",
  })
  @get()
  static getFoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foy",
  })
  @post("{id}")
  static createFoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
