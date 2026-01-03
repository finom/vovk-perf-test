import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chos")
export default class ChoController {
  @operation({
    summary: "Get Chos",
  })
  @get()
  static getChos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cho",
  })
  @post("{id}")
  static createCho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
