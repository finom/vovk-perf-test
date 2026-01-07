import { procedure, prefix, get, post, operation } from "vovk";

@prefix("be")
export default class BeController {
  @operation({
    summary: "Get Be",
  })
  @get()
  static getBe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Be",
  })
  @post("{id}")
  static createBe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
