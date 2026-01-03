import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ces")
export default class CesController {
  @operation({
    summary: "Get Ces",
  })
  @get()
  static getCes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ces",
  })
  @post("{id}")
  static createCes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
