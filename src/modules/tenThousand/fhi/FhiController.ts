import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhi")
export default class FhiController {
  @operation({
    summary: "Get Fhi",
  })
  @get()
  static getFhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhi",
  })
  @post("{id}")
  static createFhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
