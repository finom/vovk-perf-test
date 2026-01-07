import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvq")
export default class JvqController {
  @operation({
    summary: "Get Jvq",
  })
  @get()
  static getJvq = procedure({
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
