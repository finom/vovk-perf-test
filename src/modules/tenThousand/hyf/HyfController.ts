import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyf")
export default class HyfController {
  @operation({
    summary: "Get Hyf",
  })
  @get()
  static getHyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyf",
  })
  @post("{id}")
  static createHyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
