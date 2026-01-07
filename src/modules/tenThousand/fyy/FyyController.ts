import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyy")
export default class FyyController {
  @operation({
    summary: "Get Fyy",
  })
  @get()
  static getFyy = procedure({
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
