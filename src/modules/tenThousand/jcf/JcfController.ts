import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcf")
export default class JcfController {
  @operation({
    summary: "Get Jcf",
  })
  @get()
  static getJcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcf",
  })
  @post("{id}")
  static createJcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
