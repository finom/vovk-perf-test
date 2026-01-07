import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffc")
export default class FfcController {
  @operation({
    summary: "Get Ffc",
  })
  @get()
  static getFfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffc",
  })
  @post("{id}")
  static createFfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
