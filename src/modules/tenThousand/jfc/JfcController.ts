import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfc")
export default class JfcController {
  @operation({
    summary: "Get Jfc",
  })
  @get()
  static getJfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfc",
  })
  @post("{id}")
  static createJfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
