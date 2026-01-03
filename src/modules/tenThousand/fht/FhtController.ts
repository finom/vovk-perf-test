import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhts")
export default class FhtController {
  @operation({
    summary: "Get Fhts",
  })
  @get()
  static getFhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fht",
  })
  @post("{id}")
  static createFht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
