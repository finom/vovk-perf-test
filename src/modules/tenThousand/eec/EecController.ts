import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eec")
export default class EecController {
  @operation({
    summary: "Get Eec",
  })
  @get()
  static getEec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eec",
  })
  @post("{id}")
  static createEec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
