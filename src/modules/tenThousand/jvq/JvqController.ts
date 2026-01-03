import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvqs")
export default class JvqController {
  @operation({
    summary: "Get Jvqs",
  })
  @get()
  static getJvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvq",
  })
  @post("{id}")
  static createJvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
