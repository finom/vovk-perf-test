import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkt")
export default class FktController {
  @operation({
    summary: "Get Fkt",
  })
  @get()
  static getFkt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkt",
  })
  @post("{id}")
  static createFkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
