import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtts")
export default class JttController {
  @operation({
    summary: "Get Jtts",
  })
  @get()
  static getJtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtt",
  })
  @post("{id}")
  static createJtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
