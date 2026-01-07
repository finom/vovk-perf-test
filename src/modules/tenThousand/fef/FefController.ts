import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fef")
export default class FefController {
  @operation({
    summary: "Get Fef",
  })
  @get()
  static getFef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fef",
  })
  @post("{id}")
  static createFef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
