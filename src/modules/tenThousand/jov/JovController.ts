import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jov")
export default class JovController {
  @operation({
    summary: "Get Jov",
  })
  @get()
  static getJov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jov",
  })
  @post("{id}")
  static createJov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
