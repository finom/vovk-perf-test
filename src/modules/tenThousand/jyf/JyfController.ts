import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyfs")
export default class JyfController {
  @operation({
    summary: "Get Jyfs",
  })
  @get()
  static getJyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyf",
  })
  @post("{id}")
  static createJyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
