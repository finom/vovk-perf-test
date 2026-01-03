import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frws")
export default class FrwController {
  @operation({
    summary: "Get Frws",
  })
  @get()
  static getFrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frw",
  })
  @post("{id}")
  static createFrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
