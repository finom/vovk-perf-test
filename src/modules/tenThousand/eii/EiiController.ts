import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiis")
export default class EiiController {
  @operation({
    summary: "Get Eiis",
  })
  @get()
  static getEiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eii",
  })
  @post("{id}")
  static createEii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
