import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsw")
export default class BswController {
  @operation({
    summary: "Get Bsw",
  })
  @get()
  static getBsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsw",
  })
  @post("{id}")
  static createBsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
