import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jols")
export default class JolController {
  @operation({
    summary: "Get Jols",
  })
  @get()
  static getJols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jol",
  })
  @post("{id}")
  static createJol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
