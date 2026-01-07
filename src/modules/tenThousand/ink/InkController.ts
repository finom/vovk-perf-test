import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ink")
export default class InkController {
  @operation({
    summary: "Get Ink",
  })
  @get()
  static getInk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ink",
  })
  @post("{id}")
  static createInk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
