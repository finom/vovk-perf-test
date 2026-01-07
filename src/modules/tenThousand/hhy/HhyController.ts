import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhy")
export default class HhyController {
  @operation({
    summary: "Get Hhy",
  })
  @get()
  static getHhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhy",
  })
  @post("{id}")
  static createHhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
