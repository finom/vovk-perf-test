import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecy")
export default class EcyController {
  @operation({
    summary: "Get Ecy",
  })
  @get()
  static getEcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecy",
  })
  @post("{id}")
  static createEcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
