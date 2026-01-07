import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmb")
export default class NmbController {
  @operation({
    summary: "Get Nmb",
  })
  @get()
  static getNmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmb",
  })
  @post("{id}")
  static createNmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
