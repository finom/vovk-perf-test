import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kefs")
export default class KefController {
  @operation({
    summary: "Get Kefs",
  })
  @get()
  static getKefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kef",
  })
  @post("{id}")
  static createKef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
