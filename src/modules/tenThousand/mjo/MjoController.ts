import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjo")
export default class MjoController {
  @operation({
    summary: "Get Mjo",
  })
  @get()
  static getMjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjo",
  })
  @post("{id}")
  static createMjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
