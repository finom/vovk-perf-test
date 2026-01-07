import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrr")
export default class MrrController {
  @operation({
    summary: "Get Mrr",
  })
  @get()
  static getMrr = procedure({
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
