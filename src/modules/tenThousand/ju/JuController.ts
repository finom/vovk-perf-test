import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jus")
export default class JuController {
  @operation({
    summary: "Get Jus",
  })
  @get()
  static getJus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ju",
  })
  @post("{id}")
  static createJu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
