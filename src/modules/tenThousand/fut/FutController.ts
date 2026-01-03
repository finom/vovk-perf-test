import { procedure, prefix, get, post, operation } from "vovk";

@prefix("futs")
export default class FutController {
  @operation({
    summary: "Get Futs",
  })
  @get()
  static getFuts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fut",
  })
  @post("{id}")
  static createFut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
