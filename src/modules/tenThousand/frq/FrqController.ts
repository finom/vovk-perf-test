import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frq")
export default class FrqController {
  @operation({
    summary: "Get Frq",
  })
  @get()
  static getFrq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frq",
  })
  @post("{id}")
  static createFrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
