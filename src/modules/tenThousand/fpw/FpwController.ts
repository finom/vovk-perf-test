import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpws")
export default class FpwController {
  @operation({
    summary: "Get Fpws",
  })
  @get()
  static getFpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpw",
  })
  @post("{id}")
  static createFpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
