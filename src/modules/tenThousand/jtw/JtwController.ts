import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtw")
export default class JtwController {
  @operation({
    summary: "Get Jtw",
  })
  @get()
  static getJtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtw",
  })
  @post("{id}")
  static createJtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
