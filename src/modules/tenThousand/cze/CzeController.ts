import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czes")
export default class CzeController {
  @operation({
    summary: "Get Czes",
  })
  @get()
  static getCzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cze",
  })
  @post("{id}")
  static createCze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
