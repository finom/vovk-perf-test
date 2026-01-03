import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gels")
export default class GelController {
  @operation({
    summary: "Get Gels",
  })
  @get()
  static getGels = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gel",
  })
  @post("{id}")
  static createGel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
