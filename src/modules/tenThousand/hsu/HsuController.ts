import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsus")
export default class HsuController {
  @operation({
    summary: "Get Hsus",
  })
  @get()
  static getHsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsu",
  })
  @post("{id}")
  static createHsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
