import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdw")
export default class JdwController {
  @operation({
    summary: "Get Jdw",
  })
  @get()
  static getJdw = procedure({
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
