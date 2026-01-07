import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyq")
export default class JyqController {
  @operation({
    summary: "Get Jyq",
  })
  @get()
  static getJyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyq",
  })
  @post("{id}")
  static createJyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
