import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coms")
export default class ComController {
  @operation({
    summary: "Get Coms",
  })
  @get()
  static getComs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Com",
  })
  @post("{id}")
  static createCom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
