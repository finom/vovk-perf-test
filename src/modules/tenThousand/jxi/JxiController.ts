import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxis")
export default class JxiController {
  @operation({
    summary: "Get Jxis",
  })
  @get()
  static getJxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxi",
  })
  @post("{id}")
  static createJxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
