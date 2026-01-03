import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyas")
export default class DyaController {
  @operation({
    summary: "Get Dyas",
  })
  @get()
  static getDyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dya",
  })
  @post("{id}")
  static createDya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
