import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnr")
export default class HnrController {
  @operation({
    summary: "Get Hnr",
  })
  @get()
  static getHnr = procedure({
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
