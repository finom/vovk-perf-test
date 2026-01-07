import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daj")
export default class DajController {
  @operation({
    summary: "Get Daj",
  })
  @get()
  static getDaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daj",
  })
  @post("{id}")
  static createDaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
