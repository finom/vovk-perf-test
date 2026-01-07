import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ba")
export default class BaController {
  @operation({
    summary: "Get Ba",
  })
  @get()
  static getBa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ba",
  })
  @post("{id}")
  static createBa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
