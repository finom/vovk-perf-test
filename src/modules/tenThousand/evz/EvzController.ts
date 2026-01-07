import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evz")
export default class EvzController {
  @operation({
    summary: "Get Evz",
  })
  @get()
  static getEvz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evz",
  })
  @post("{id}")
  static createEvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
