import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ups")
export default class UpController {
  @operation({
    summary: "Get Ups",
  })
  @get()
  static getUps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Up",
  })
  @post("{id}")
  static createUp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
