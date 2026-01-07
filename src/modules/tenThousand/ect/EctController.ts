import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ect")
export default class EctController {
  @operation({
    summary: "Get Ect",
  })
  @get()
  static getEct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ect",
  })
  @post("{id}")
  static createEct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
