import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyo")
export default class FyoController {
  @operation({
    summary: "Get Fyo",
  })
  @get()
  static getFyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyo",
  })
  @post("{id}")
  static createFyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
