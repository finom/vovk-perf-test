import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfj")
export default class JfjController {
  @operation({
    summary: "Get Jfj",
  })
  @get()
  static getJfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfj",
  })
  @post("{id}")
  static createJfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
