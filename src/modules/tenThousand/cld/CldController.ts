import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cld")
export default class CldController {
  @operation({
    summary: "Get Cld",
  })
  @get()
  static getCld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cld",
  })
  @post("{id}")
  static createCld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
