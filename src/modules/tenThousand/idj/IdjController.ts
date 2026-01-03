import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idjs")
export default class IdjController {
  @operation({
    summary: "Get Idjs",
  })
  @get()
  static getIdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idj",
  })
  @post("{id}")
  static createIdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
