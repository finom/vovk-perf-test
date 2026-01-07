import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlc")
export default class JlcController {
  @operation({
    summary: "Get Jlc",
  })
  @get()
  static getJlc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlc",
  })
  @post("{id}")
  static createJlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
