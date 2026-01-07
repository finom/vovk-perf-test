import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evv")
export default class EvvController {
  @operation({
    summary: "Get Evv",
  })
  @get()
  static getEvv = procedure({
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
