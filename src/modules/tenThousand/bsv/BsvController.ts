import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsv")
export default class BsvController {
  @operation({
    summary: "Get Bsv",
  })
  @get()
  static getBsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsv",
  })
  @post("{id}")
  static createBsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
