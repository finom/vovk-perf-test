import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evs")
export default class EvsController {
  @operation({
    summary: "Get Evs",
  })
  @get()
  static getEvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evs",
  })
  @post("{id}")
  static createEvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
