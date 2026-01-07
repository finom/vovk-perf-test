import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxn")
export default class JxnController {
  @operation({
    summary: "Get Jxn",
  })
  @get()
  static getJxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxn",
  })
  @post("{id}")
  static createJxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
