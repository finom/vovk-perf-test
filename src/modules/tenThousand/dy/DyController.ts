import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dies")
export default class DyController {
  @operation({
    summary: "Get Dies",
  })
  @get()
  static getDies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dy",
  })
  @post("{id}")
  static createDy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
