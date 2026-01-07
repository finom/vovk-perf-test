import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cel")
export default class CelController {
  @operation({
    summary: "Get Cel",
  })
  @get()
  static getCel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cel",
  })
  @post("{id}")
  static createCel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
