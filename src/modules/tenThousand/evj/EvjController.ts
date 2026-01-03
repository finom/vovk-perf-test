import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evjs")
export default class EvjController {
  @operation({
    summary: "Get Evjs",
  })
  @get()
  static getEvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evj",
  })
  @post("{id}")
  static createEvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
