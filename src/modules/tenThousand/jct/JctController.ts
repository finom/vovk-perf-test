import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jct")
export default class JctController {
  @operation({
    summary: "Get Jct",
  })
  @get()
  static getJct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jct",
  })
  @post("{id}")
  static createJct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
