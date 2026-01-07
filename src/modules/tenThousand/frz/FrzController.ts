import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frz")
export default class FrzController {
  @operation({
    summary: "Get Frz",
  })
  @get()
  static getFrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frz",
  })
  @post("{id}")
  static createFrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
