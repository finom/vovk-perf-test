import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqa")
export default class FqaController {
  @operation({
    summary: "Get Fqa",
  })
  @get()
  static getFqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqa",
  })
  @post("{id}")
  static createFqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
