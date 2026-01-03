import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoves")
export default class EofController {
  @operation({
    summary: "Get Eoves",
  })
  @get()
  static getEoves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eof",
  })
  @post("{id}")
  static createEof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
