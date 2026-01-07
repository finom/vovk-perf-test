import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahl")
export default class AhlController {
  @operation({
    summary: "Get Ahl",
  })
  @get()
  static getAhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahl",
  })
  @post("{id}")
  static createAhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
