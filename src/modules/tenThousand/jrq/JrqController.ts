import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrqs")
export default class JrqController {
  @operation({
    summary: "Get Jrqs",
  })
  @get()
  static getJrqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrq",
  })
  @post("{id}")
  static createJrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
