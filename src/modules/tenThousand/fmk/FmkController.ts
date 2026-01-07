import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmk")
export default class FmkController {
  @operation({
    summary: "Get Fmk",
  })
  @get()
  static getFmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmk",
  })
  @post("{id}")
  static createFmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
