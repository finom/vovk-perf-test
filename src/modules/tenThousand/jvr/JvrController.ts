import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvrs")
export default class JvrController {
  @operation({
    summary: "Get Jvrs",
  })
  @get()
  static getJvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvr",
  })
  @post("{id}")
  static createJvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
