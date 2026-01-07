import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drw")
export default class DrwController {
  @operation({
    summary: "Get Drw",
  })
  @get()
  static getDrw = procedure({
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
