import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tqs")
export default class TqController {
  @operation({
    summary: "Get Tqs",
  })
  @get()
  static getTqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tq",
  })
  @post("{id}")
  static createTq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
