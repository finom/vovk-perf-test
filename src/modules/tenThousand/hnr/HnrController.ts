import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnrs")
export default class HnrController {
  @operation({
    summary: "Get Hnrs",
  })
  @get()
  static getHnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnr",
  })
  @post("{id}")
  static createHnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
