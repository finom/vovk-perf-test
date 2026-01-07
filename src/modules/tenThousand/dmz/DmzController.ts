import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmz")
export default class DmzController {
  @operation({
    summary: "Get Dmz",
  })
  @get()
  static getDmz = procedure({
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
