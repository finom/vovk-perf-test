import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpqs")
export default class GpqController {
  @operation({
    summary: "Get Gpqs",
  })
  @get()
  static getGpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpq",
  })
  @post("{id}")
  static createGpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
