import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsks")
export default class HskController {
  @operation({
    summary: "Get Hsks",
  })
  @get()
  static getHsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsk",
  })
  @post("{id}")
  static createHsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
