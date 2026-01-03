import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffqs")
export default class FfqController {
  @operation({
    summary: "Get Ffqs",
  })
  @get()
  static getFfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffq",
  })
  @post("{id}")
  static createFfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
