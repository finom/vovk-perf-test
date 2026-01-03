import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahls")
export default class AhlController {
  @operation({
    summary: "Get Ahls",
  })
  @get()
  static getAhls = procedure({
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
