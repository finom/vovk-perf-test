import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evf")
export default class EvfController {
  @operation({
    summary: "Get Evf",
  })
  @get()
  static getEvf = procedure({
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
