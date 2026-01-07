import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrh")
export default class JrhController {
  @operation({
    summary: "Get Jrh",
  })
  @get()
  static getJrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrh",
  })
  @post("{id}")
  static createJrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
