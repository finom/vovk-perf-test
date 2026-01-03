import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evfs")
export default class EvfController {
  @operation({
    summary: "Get Evfs",
  })
  @get()
  static getEvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evf",
  })
  @post("{id}")
  static createEvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
