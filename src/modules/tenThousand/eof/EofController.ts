import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eof")
export default class EofController {
  @operation({
    summary: "Get Eof",
  })
  @get()
  static getEof = procedure({
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
