import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kid")
export default class KidController {
  @operation({
    summary: "Get Kid",
  })
  @get()
  static getKid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kid",
  })
  @post("{id}")
  static createKid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
