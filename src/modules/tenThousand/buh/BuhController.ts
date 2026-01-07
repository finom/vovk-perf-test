import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buh")
export default class BuhController {
  @operation({
    summary: "Get Buh",
  })
  @get()
  static getBuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buh",
  })
  @post("{id}")
  static createBuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
