import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjos")
export default class MjoController {
  @operation({
    summary: "Get Mjos",
  })
  @get()
  static getMjos = procedure({
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
