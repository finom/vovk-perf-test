import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jul")
export default class JulController {
  @operation({
    summary: "Get Jul",
  })
  @get()
  static getJul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jul",
  })
  @post("{id}")
  static createJul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
