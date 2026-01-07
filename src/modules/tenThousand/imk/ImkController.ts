import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imk")
export default class ImkController {
  @operation({
    summary: "Get Imk",
  })
  @get()
  static getImk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imk",
  })
  @post("{id}")
  static createImk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
