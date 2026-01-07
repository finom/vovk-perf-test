import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gep")
export default class GepController {
  @operation({
    summary: "Get Gep",
  })
  @get()
  static getGep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gep",
  })
  @post("{id}")
  static createGep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
