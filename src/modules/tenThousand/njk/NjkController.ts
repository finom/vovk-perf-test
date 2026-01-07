import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njk")
export default class NjkController {
  @operation({
    summary: "Get Njk",
  })
  @get()
  static getNjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njk",
  })
  @post("{id}")
  static createNjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
