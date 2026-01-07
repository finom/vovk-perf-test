import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhy")
export default class JhyController {
  @operation({
    summary: "Get Jhy",
  })
  @get()
  static getJhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhy",
  })
  @post("{id}")
  static createJhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
