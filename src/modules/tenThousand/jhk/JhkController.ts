import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhk")
export default class JhkController {
  @operation({
    summary: "Get Jhk",
  })
  @get()
  static getJhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhk",
  })
  @post("{id}")
  static createJhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
