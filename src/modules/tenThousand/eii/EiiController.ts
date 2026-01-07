import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eii")
export default class EiiController {
  @operation({
    summary: "Get Eii",
  })
  @get()
  static getEii = procedure({
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
