import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhs")
export default class FhsController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhs",
  })
  @post("{id}")
  static createFhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
