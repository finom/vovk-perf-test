import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kad")
export default class KadController {
  @operation({
    summary: "Get Kad",
  })
  @get()
  static getKad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kad",
  })
  @post("{id}")
  static createKad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
