import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evh")
export default class EvhController {
  @operation({
    summary: "Get Evh",
  })
  @get()
  static getEvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evh",
  })
  @post("{id}")
  static createEvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
