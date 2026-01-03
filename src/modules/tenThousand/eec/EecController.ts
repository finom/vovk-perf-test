import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eecs")
export default class EecController {
  @operation({
    summary: "Get Eecs",
  })
  @get()
  static getEecs = procedure({
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
