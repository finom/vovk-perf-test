import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bi")
export default class BiController {
  @operation({
    summary: "Get Bi",
  })
  @get()
  static getBi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bi",
  })
  @post("{id}")
  static createBi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
