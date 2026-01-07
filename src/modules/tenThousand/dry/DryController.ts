import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dry")
export default class DryController {
  @operation({
    summary: "Get Dry",
  })
  @get()
  static getDry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dry",
  })
  @post("{id}")
  static createDry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
