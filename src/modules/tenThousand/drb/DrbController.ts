import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drb")
export default class DrbController {
  @operation({
    summary: "Get Drb",
  })
  @get()
  static getDrb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drb",
  })
  @post("{id}")
  static createDrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
