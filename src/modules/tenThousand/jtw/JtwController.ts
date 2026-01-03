import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtws")
export default class JtwController {
  @operation({
    summary: "Get Jtws",
  })
  @get()
  static getJtws = procedure({
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
