import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpm")
export default class HpmController {
  @operation({
    summary: "Get Hpm",
  })
  @get()
  static getHpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpm",
  })
  @post("{id}")
  static createHpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
