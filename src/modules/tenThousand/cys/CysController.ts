import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cys")
export default class CysController {
  @operation({
    summary: "Get Cys",
  })
  @get()
  static getCys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cys",
  })
  @post("{id}")
  static createCys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
