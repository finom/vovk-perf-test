import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inks")
export default class InkController {
  @operation({
    summary: "Get Inks",
  })
  @get()
  static getInks = procedure({
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
