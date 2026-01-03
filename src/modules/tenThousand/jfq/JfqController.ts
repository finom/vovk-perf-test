import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfqs")
export default class JfqController {
  @operation({
    summary: "Get Jfqs",
  })
  @get()
  static getJfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfq",
  })
  @post("{id}")
  static createJfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
