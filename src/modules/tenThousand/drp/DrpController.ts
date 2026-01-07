import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drp")
export default class DrpController {
  @operation({
    summary: "Get Drp",
  })
  @get()
  static getDrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drp",
  })
  @post("{id}")
  static createDrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
