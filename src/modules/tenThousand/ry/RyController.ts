import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ries")
export default class RyController {
  @operation({
    summary: "Get Ries",
  })
  @get()
  static getRies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ry",
  })
  @post("{id}")
  static createRy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
