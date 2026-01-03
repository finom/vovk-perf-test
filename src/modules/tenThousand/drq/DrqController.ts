import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drqs")
export default class DrqController {
  @operation({
    summary: "Get Drqs",
  })
  @get()
  static getDrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drq",
  })
  @post("{id}")
  static createDrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
