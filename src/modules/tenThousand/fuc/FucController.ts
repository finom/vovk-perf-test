import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fucs")
export default class FucController {
  @operation({
    summary: "Get Fucs",
  })
  @get()
  static getFucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuc",
  })
  @post("{id}")
  static createFuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
