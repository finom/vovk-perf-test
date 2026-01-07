import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzu")
export default class FzuController {
  @operation({
    summary: "Get Fzu",
  })
  @get()
  static getFzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzu",
  })
  @post("{id}")
  static createFzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
