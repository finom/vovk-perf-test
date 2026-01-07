import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaf")
export default class JafController {
  @operation({
    summary: "Get Jaf",
  })
  @get()
  static getJaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaf",
  })
  @post("{id}")
  static createJaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
