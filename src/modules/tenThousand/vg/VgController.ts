import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vg")
export default class VgController {
  @operation({
    summary: "Get Vg",
  })
  @get()
  static getVg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vg",
  })
  @post("{id}")
  static createVg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
