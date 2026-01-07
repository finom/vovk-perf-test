import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knr")
export default class KnrController {
  @operation({
    summary: "Get Knr",
  })
  @get()
  static getKnr = procedure({
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
