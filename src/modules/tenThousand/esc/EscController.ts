import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esc")
export default class EscController {
  @operation({
    summary: "Get Esc",
  })
  @get()
  static getEsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esc",
  })
  @post("{id}")
  static createEsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
