import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jris")
export default class JriController {
  @operation({
    summary: "Get Jris",
  })
  @get()
  static getJris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jri",
  })
  @post("{id}")
  static createJri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
