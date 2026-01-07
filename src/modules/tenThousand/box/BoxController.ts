import { procedure, prefix, get, post, operation } from "vovk";

@prefix("box")
export default class BoxController {
  @operation({
    summary: "Get Box",
  })
  @get()
  static getBox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Box",
  })
  @post("{id}")
  static createBox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
