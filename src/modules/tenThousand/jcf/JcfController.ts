import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcfs")
export default class JcfController {
  @operation({
    summary: "Get Jcfs",
  })
  @get()
  static getJcfs = procedure({
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
