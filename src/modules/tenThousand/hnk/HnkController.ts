import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnk")
export default class HnkController {
  @operation({
    summary: "Get Hnk",
  })
  @get()
  static getHnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnk",
  })
  @post("{id}")
  static createHnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
