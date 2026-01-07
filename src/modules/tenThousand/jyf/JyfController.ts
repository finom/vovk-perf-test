import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyf")
export default class JyfController {
  @operation({
    summary: "Get Jyf",
  })
  @get()
  static getJyf = procedure({
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
