import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcn")
export default class JcnController {
  @operation({
    summary: "Get Jcn",
  })
  @get()
  static getJcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcn",
  })
  @post("{id}")
  static createJcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
