import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jccs")
export default class JccController {
  @operation({
    summary: "Get Jccs",
  })
  @get()
  static getJccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcc",
  })
  @post("{id}")
  static createJcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
