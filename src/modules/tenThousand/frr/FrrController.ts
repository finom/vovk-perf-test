import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frr")
export default class FrrController {
  @operation({
    summary: "Get Frr",
  })
  @get()
  static getFrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frr",
  })
  @post("{id}")
  static createFrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
