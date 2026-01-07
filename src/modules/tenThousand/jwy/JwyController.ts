import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwy")
export default class JwyController {
  @operation({
    summary: "Get Jwy",
  })
  @get()
  static getJwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwy",
  })
  @post("{id}")
  static createJwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
