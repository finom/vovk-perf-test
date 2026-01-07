import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drx")
export default class DrxController {
  @operation({
    summary: "Get Drx",
  })
  @get()
  static getDrx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drx",
  })
  @post("{id}")
  static createDrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
