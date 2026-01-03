import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drws")
export default class DrwController {
  @operation({
    summary: "Get Drws",
  })
  @get()
  static getDrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drw",
  })
  @post("{id}")
  static createDrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
