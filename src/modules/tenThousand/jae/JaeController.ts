import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jae")
export default class JaeController {
  @operation({
    summary: "Get Jae",
  })
  @get()
  static getJae = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jae",
  })
  @post("{id}")
  static createJae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
