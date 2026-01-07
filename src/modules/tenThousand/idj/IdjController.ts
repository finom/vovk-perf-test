import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idj")
export default class IdjController {
  @operation({
    summary: "Get Idj",
  })
  @get()
  static getIdj = procedure({
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
