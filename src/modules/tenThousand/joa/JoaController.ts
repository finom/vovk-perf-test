import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joas")
export default class JoaController {
  @operation({
    summary: "Get Joas",
  })
  @get()
  static getJoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joa",
  })
  @post("{id}")
  static createJoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
