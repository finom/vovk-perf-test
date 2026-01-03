import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaes")
export default class JaeController {
  @operation({
    summary: "Get Jaes",
  })
  @get()
  static getJaes = procedure({
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
