import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fizs")
export default class FizController {
  @operation({
    summary: "Get Fizs",
  })
  @get()
  static getFizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiz",
  })
  @post("{id}")
  static createFiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
