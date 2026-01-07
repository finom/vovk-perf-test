import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcy")
export default class FcyController {
  @operation({
    summary: "Get Fcy",
  })
  @get()
  static getFcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcy",
  })
  @post("{id}")
  static createFcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
