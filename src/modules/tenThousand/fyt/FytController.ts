import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyt")
export default class FytController {
  @operation({
    summary: "Get Fyt",
  })
  @get()
  static getFyt = procedure({
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
