import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rb")
export default class RbController {
  @operation({
    summary: "Get Rb",
  })
  @get()
  static getRb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rb",
  })
  @post("{id}")
  static createRb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
