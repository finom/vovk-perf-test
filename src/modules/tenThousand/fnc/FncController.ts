import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnc")
export default class FncController {
  @operation({
    summary: "Get Fnc",
  })
  @get()
  static getFnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnc",
  })
  @post("{id}")
  static createFnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
