import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jims")
export default class JimController {
  @operation({
    summary: "Get Jims",
  })
  @get()
  static getJims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jim",
  })
  @post("{id}")
  static createJim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
