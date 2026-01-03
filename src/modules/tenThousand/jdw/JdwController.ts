import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdws")
export default class JdwController {
  @operation({
    summary: "Get Jdws",
  })
  @get()
  static getJdws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdw",
  })
  @post("{id}")
  static createJdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
