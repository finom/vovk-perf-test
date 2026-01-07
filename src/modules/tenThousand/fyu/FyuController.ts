import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyu")
export default class FyuController {
  @operation({
    summary: "Get Fyu",
  })
  @get()
  static getFyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyu",
  })
  @post("{id}")
  static createFyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
