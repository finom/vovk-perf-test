import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juzs")
export default class JuzController {
  @operation({
    summary: "Get Juzs",
  })
  @get()
  static getJuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juz",
  })
  @post("{id}")
  static createJuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
