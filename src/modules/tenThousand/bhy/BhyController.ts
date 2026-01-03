import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhies")
export default class BhyController {
  @operation({
    summary: "Get Bhies",
  })
  @get()
  static getBhies = procedure({
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
