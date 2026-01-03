import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vzs")
export default class VzController {
  @operation({
    summary: "Get Vzs",
  })
  @get()
  static getVzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vz",
  })
  @post("{id}")
  static createVz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
