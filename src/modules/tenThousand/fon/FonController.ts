import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fon")
export default class FonController {
  @operation({
    summary: "Get Fon",
  })
  @get()
  static getFon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fon",
  })
  @post("{id}")
  static createFon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
