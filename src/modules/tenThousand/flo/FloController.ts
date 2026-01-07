import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flo")
export default class FloController {
  @operation({
    summary: "Get Flo",
  })
  @get()
  static getFlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flo",
  })
  @post("{id}")
  static createFlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
