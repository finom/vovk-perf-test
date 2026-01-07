import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffq")
export default class FfqController {
  @operation({
    summary: "Get Ffq",
  })
  @get()
  static getFfq = procedure({
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
