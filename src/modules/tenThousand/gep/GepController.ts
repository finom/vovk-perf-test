import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geps")
export default class GepController {
  @operation({
    summary: "Get Geps",
  })
  @get()
  static getGeps = procedure({
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
