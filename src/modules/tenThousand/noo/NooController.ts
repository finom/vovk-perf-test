import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noos")
export default class NooController {
  @operation({
    summary: "Get Noos",
  })
  @get()
  static getNoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noo",
  })
  @post("{id}")
  static createNoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
