import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frhs")
export default class FrhController {
  @operation({
    summary: "Get Frhs",
  })
  @get()
  static getFrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frh",
  })
  @post("{id}")
  static createFrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
