import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuw")
export default class FuwController {
  @operation({
    summary: "Get Fuw",
  })
  @get()
  static getFuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuw",
  })
  @post("{id}")
  static createFuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
