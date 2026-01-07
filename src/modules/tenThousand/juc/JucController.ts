import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juc")
export default class JucController {
  @operation({
    summary: "Get Juc",
  })
  @get()
  static getJuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juc",
  })
  @post("{id}")
  static createJuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
