import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flos")
export default class FloController {
  @operation({
    summary: "Get Flos",
  })
  @get()
  static getFlos = procedure({
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
