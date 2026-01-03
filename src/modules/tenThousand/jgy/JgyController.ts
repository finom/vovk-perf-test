import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgies")
export default class JgyController {
  @operation({
    summary: "Get Jgies",
  })
  @get()
  static getJgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgy",
  })
  @post("{id}")
  static createJgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
