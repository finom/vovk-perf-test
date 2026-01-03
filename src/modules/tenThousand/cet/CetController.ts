import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cets")
export default class CetController {
  @operation({
    summary: "Get Cets",
  })
  @get()
  static getCets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cet",
  })
  @post("{id}")
  static createCet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
