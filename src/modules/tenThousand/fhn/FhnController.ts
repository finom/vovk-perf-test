import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhns")
export default class FhnController {
  @operation({
    summary: "Get Fhns",
  })
  @get()
  static getFhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhn",
  })
  @post("{id}")
  static createFhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
