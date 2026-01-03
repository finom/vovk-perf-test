import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpps")
export default class FppController {
  @operation({
    summary: "Get Fpps",
  })
  @get()
  static getFpps = procedure({
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
