import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noo")
export default class NooController {
  @operation({
    summary: "Get Noo",
  })
  @get()
  static getNoo = procedure({
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
