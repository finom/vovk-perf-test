import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqk")
export default class CqkController {
  @operation({
    summary: "Get Cqk",
  })
  @get()
  static getCqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqk",
  })
  @post("{id}")
  static createCqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
