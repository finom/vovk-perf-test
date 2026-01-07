import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dx")
export default class DxController {
  @operation({
    summary: "Get Dx",
  })
  @get()
  static getDx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dx",
  })
  @post("{id}")
  static createDx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
