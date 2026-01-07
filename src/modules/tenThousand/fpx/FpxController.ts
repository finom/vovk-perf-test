import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpx")
export default class FpxController {
  @operation({
    summary: "Get Fpx",
  })
  @get()
  static getFpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpx",
  })
  @post("{id}")
  static createFpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
