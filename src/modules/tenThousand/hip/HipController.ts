import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hip")
export default class HipController {
  @operation({
    summary: "Get Hip",
  })
  @get()
  static getHip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hip",
  })
  @post("{id}")
  static createHip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
