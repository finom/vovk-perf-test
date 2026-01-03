import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvjs")
export default class JvjController {
  @operation({
    summary: "Get Jvjs",
  })
  @get()
  static getJvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvj",
  })
  @post("{id}")
  static createJvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
