import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frj")
export default class FrjController {
  @operation({
    summary: "Get Frj",
  })
  @get()
  static getFrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frj",
  })
  @post("{id}")
  static createFrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
