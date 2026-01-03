import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxxes")
export default class FxxController {
  @operation({
    summary: "Get Fxxes",
  })
  @get()
  static getFxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxx",
  })
  @post("{id}")
  static createFxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
