import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyb")
export default class JybController {
  @operation({
    summary: "Get Jyb",
  })
  @get()
  static getJyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyb",
  })
  @post("{id}")
  static createJyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
