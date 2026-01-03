import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhs")
export default class JhController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jh",
  })
  @post("{id}")
  static createJh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
