import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhies")
export default class JhyController {
  @operation({
    summary: "Get Jhies",
  })
  @get()
  static getJhies = procedure({
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
