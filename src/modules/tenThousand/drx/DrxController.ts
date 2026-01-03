import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drxes")
export default class DrxController {
  @operation({
    summary: "Get Drxes",
  })
  @get()
  static getDrxes = procedure({
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
