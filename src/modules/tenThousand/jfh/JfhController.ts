import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfhs")
export default class JfhController {
  @operation({
    summary: "Get Jfhs",
  })
  @get()
  static getJfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfh",
  })
  @post("{id}")
  static createJfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
