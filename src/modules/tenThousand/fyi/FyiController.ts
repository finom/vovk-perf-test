import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyi")
export default class FyiController {
  @operation({
    summary: "Get Fyi",
  })
  @get()
  static getFyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyi",
  })
  @post("{id}")
  static createFyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
