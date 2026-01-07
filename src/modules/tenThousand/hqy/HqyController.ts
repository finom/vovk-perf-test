import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqy")
export default class HqyController {
  @operation({
    summary: "Get Hqy",
  })
  @get()
  static getHqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqy",
  })
  @post("{id}")
  static createHqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
