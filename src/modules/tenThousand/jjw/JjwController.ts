import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjw")
export default class JjwController {
  @operation({
    summary: "Get Jjw",
  })
  @get()
  static getJjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjw",
  })
  @post("{id}")
  static createJjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
