import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atds")
export default class AtdController {
  @operation({
    summary: "Get Atds",
  })
  @get()
  static getAtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atd",
  })
  @post("{id}")
  static createAtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
