import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdms")
export default class JdmController {
  @operation({
    summary: "Get Jdms",
  })
  @get()
  static getJdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdm",
  })
  @post("{id}")
  static createJdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
