import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnq")
export default class HnqController {
  @operation({
    summary: "Get Hnq",
  })
  @get()
  static getHnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnq",
  })
  @post("{id}")
  static createHnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
