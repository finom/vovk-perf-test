import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbo")
export default class GboController {
  @operation({
    summary: "Get Gbo",
  })
  @get()
  static getGbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbo",
  })
  @post("{id}")
  static createGbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
