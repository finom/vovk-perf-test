import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyts")
export default class FytController {
  @operation({
    summary: "Get Fyts",
  })
  @get()
  static getFyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyt",
  })
  @post("{id}")
  static createFyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
