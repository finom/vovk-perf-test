import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxts")
export default class LxtController {
  @operation({
    summary: "Get Lxts",
  })
  @get()
  static getLxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxt",
  })
  @post("{id}")
  static createLxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
