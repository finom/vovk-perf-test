import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhk")
export default class BhkController {
  @operation({
    summary: "Get Bhk",
  })
  @get()
  static getBhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhk",
  })
  @post("{id}")
  static createBhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
