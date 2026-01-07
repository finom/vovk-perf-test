import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvk")
export default class JvkController {
  @operation({
    summary: "Get Jvk",
  })
  @get()
  static getJvk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvk",
  })
  @post("{id}")
  static createJvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
