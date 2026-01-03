import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jys")
export default class JysController {
  @operation({
    summary: "Get Jys",
  })
  @get()
  static getJys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jys",
  })
  @post("{id}")
  static createJys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
