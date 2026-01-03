import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cels")
export default class CelController {
  @operation({
    summary: "Get Cels",
  })
  @get()
  static getCels = procedure({
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
