import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrx")
export default class JrxController {
  @operation({
    summary: "Get Jrx",
  })
  @get()
  static getJrx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrx",
  })
  @post("{id}")
  static createJrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
