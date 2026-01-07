import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpb")
export default class GpbController {
  @operation({
    summary: "Get Gpb",
  })
  @get()
  static getGpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpb",
  })
  @post("{id}")
  static createGpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
