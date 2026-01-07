import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hy")
export default class HyController {
  @operation({
    summary: "Get Hy",
  })
  @get()
  static getHy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hy",
  })
  @post("{id}")
  static createHy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
