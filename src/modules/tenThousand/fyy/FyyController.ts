import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyys")
export default class FyyController {
  @operation({
    summary: "Get Fyys",
  })
  @get()
  static getFyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyy",
  })
  @post("{id}")
  static createFyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
