import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hab")
export default class HabController {
  @operation({
    summary: "Get Hab",
  })
  @get()
  static getHab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hab",
  })
  @post("{id}")
  static createHab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
