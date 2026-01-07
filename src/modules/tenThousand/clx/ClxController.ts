import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clx")
export default class ClxController {
  @operation({
    summary: "Get Clx",
  })
  @get()
  static getClx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clx",
  })
  @post("{id}")
  static createClx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
