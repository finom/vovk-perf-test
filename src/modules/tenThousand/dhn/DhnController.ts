import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhns")
export default class DhnController {
  @operation({
    summary: "Get Dhns",
  })
  @get()
  static getDhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhn",
  })
  @post("{id}")
  static createDhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
