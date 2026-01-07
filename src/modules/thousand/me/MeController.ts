import { procedure, prefix, get, post, operation } from "vovk";

@prefix("me")
export default class MeController {
  @operation({
    summary: "Get Me",
  })
  @get()
  static getMe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Me",
  })
  @post("{id}")
  static createMe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
