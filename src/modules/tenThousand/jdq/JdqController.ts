import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdq")
export default class JdqController {
  @operation({
    summary: "Get Jdq",
  })
  @get()
  static getJdq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdq",
  })
  @post("{id}")
  static createJdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
