import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmu")
export default class FmuController {
  @operation({
    summary: "Get Fmu",
  })
  @get()
  static getFmu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmu",
  })
  @post("{id}")
  static createFmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
