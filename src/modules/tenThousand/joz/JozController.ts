import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joz")
export default class JozController {
  @operation({
    summary: "Get Joz",
  })
  @get()
  static getJoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joz",
  })
  @post("{id}")
  static createJoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
