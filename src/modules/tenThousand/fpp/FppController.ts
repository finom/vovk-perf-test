import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpp")
export default class FppController {
  @operation({
    summary: "Get Fpp",
  })
  @get()
  static getFpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpp",
  })
  @post("{id}")
  static createFpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
