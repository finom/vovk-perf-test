import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evg")
export default class EvgController {
  @operation({
    summary: "Get Evg",
  })
  @get()
  static getEvg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evg",
  })
  @post("{id}")
  static createEvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
