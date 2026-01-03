import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmzs")
export default class DmzController {
  @operation({
    summary: "Get Dmzs",
  })
  @get()
  static getDmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmz",
  })
  @post("{id}")
  static createDmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
