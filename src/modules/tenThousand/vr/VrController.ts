import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vrs")
export default class VrController {
  @operation({
    summary: "Get Vrs",
  })
  @get()
  static getVrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vr",
  })
  @post("{id}")
  static createVr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
