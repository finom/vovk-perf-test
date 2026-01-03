import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmfs")
export default class JmfController {
  @operation({
    summary: "Get Jmfs",
  })
  @get()
  static getJmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmf",
  })
  @post("{id}")
  static createJmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
