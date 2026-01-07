import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcq")
export default class JcqController {
  @operation({
    summary: "Get Jcq",
  })
  @get()
  static getJcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcq",
  })
  @post("{id}")
  static createJcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
