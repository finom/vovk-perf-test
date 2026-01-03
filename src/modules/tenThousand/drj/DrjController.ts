import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drjs")
export default class DrjController {
  @operation({
    summary: "Get Drjs",
  })
  @get()
  static getDrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drj",
  })
  @post("{id}")
  static createDrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
