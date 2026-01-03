import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhjs")
export default class BhjController {
  @operation({
    summary: "Get Bhjs",
  })
  @get()
  static getBhjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhj",
  })
  @post("{id}")
  static createBhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
