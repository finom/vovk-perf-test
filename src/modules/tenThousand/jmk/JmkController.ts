import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmk")
export default class JmkController {
  @operation({
    summary: "Get Jmk",
  })
  @get()
  static getJmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmk",
  })
  @post("{id}")
  static createJmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
