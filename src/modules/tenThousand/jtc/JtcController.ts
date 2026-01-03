import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtcs")
export default class JtcController {
  @operation({
    summary: "Get Jtcs",
  })
  @get()
  static getJtcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtc",
  })
  @post("{id}")
  static createJtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
