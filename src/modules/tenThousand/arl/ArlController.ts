import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arls")
export default class ArlController {
  @operation({
    summary: "Get Arls",
  })
  @get()
  static getArls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arl",
  })
  @post("{id}")
  static createArl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
