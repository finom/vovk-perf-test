import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcs")
export default class JcController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jc",
  })
  @post("{id}")
  static createJc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
