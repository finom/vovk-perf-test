import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knrs")
export default class KnrController {
  @operation({
    summary: "Get Knrs",
  })
  @get()
  static getKnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knr",
  })
  @post("{id}")
  static createKnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
