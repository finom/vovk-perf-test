import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jix")
export default class JixController {
  @operation({
    summary: "Get Jix",
  })
  @get()
  static getJix = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jix",
  })
  @post("{id}")
  static createJix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
