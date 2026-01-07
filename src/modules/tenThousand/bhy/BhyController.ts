import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhy")
export default class BhyController {
  @operation({
    summary: "Get Bhy",
  })
  @get()
  static getBhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhy",
  })
  @post("{id}")
  static createBhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
