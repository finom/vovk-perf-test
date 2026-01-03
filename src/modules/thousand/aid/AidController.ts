import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aid")
export default class AidController {
  @operation({
    summary: "Get Aid",
  })
  @get()
  static getAid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aid",
  })
  @post("{id}")
  static createAid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
