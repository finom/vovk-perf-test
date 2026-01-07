import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evb")
export default class EvbController {
  @operation({
    summary: "Get Evb",
  })
  @get()
  static getEvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evb",
  })
  @post("{id}")
  static createEvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
