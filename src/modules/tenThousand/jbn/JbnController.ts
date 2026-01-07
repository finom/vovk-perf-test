import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbn")
export default class JbnController {
  @operation({
    summary: "Get Jbn",
  })
  @get()
  static getJbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbn",
  })
  @post("{id}")
  static createJbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
