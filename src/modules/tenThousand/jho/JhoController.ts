import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhos")
export default class JhoController {
  @operation({
    summary: "Get Jhos",
  })
  @get()
  static getJhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jho",
  })
  @post("{id}")
  static createJho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
