import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hujs")
export default class HujController {
  @operation({
    summary: "Get Hujs",
  })
  @get()
  static getHujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huj",
  })
  @post("{id}")
  static createHuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
