import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jybs")
export default class JybController {
  @operation({
    summary: "Get Jybs",
  })
  @get()
  static getJybs = procedure({
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
