import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jip")
export default class JipController {
  @operation({
    summary: "Get Jip",
  })
  @get()
  static getJip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jip",
  })
  @post("{id}")
  static createJip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
