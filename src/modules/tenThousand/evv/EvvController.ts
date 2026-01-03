import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evvs")
export default class EvvController {
  @operation({
    summary: "Get Evvs",
  })
  @get()
  static getEvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evv",
  })
  @post("{id}")
  static createEvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
