import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enl")
export default class EnlController {
  @operation({
    summary: "Get Enl",
  })
  @get()
  static getEnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enl",
  })
  @post("{id}")
  static createEnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
