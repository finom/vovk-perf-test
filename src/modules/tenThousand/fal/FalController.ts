import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fals")
export default class FalController {
  @operation({
    summary: "Get Fals",
  })
  @get()
  static getFals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fal",
  })
  @post("{id}")
  static createFal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
