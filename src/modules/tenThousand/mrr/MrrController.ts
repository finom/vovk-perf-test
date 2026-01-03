import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrrs")
export default class MrrController {
  @operation({
    summary: "Get Mrrs",
  })
  @get()
  static getMrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrr",
  })
  @post("{id}")
  static createMrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
