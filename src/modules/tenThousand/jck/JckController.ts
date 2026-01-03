import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcks")
export default class JckController {
  @operation({
    summary: "Get Jcks",
  })
  @get()
  static getJcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jck",
  })
  @post("{id}")
  static createJck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
