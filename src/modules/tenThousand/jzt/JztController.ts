import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzt")
export default class JztController {
  @operation({
    summary: "Get Jzt",
  })
  @get()
  static getJzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzt",
  })
  @post("{id}")
  static createJzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
