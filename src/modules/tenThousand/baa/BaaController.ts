import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baas")
export default class BaaController {
  @operation({
    summary: "Get Baas",
  })
  @get()
  static getBaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baa",
  })
  @post("{id}")
  static createBaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
