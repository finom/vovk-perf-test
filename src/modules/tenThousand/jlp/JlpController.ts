import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlps")
export default class JlpController {
  @operation({
    summary: "Get Jlps",
  })
  @get()
  static getJlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlp",
  })
  @post("{id}")
  static createJlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
