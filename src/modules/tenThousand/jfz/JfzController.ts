import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfzs")
export default class JfzController {
  @operation({
    summary: "Get Jfzs",
  })
  @get()
  static getJfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfz",
  })
  @post("{id}")
  static createJfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
