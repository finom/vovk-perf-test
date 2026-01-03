import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyfs")
export default class DyfController {
  @operation({
    summary: "Get Dyfs",
  })
  @get()
  static getDyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyf",
  })
  @post("{id}")
  static createDyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
