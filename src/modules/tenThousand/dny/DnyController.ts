import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dny")
export default class DnyController {
  @operation({
    summary: "Get Dny",
  })
  @get()
  static getDny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dny",
  })
  @post("{id}")
  static createDny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
