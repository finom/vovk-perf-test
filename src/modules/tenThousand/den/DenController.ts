import { procedure, prefix, get, post, operation } from "vovk";

@prefix("den")
export default class DenController {
  @operation({
    summary: "Get Den",
  })
  @get()
  static getDen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Den",
  })
  @post("{id}")
  static createDen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
