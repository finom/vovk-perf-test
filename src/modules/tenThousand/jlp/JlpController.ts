import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlp")
export default class JlpController {
  @operation({
    summary: "Get Jlp",
  })
  @get()
  static getJlp = procedure({
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
