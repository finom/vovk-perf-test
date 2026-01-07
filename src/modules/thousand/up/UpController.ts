import { procedure, prefix, get, post, operation } from "vovk";

@prefix("up")
export default class UpController {
  @operation({
    summary: "Get Up",
  })
  @get()
  static getUp = procedure({
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
