import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apbs")
export default class ApbController {
  @operation({
    summary: "Get Apbs",
  })
  @get()
  static getApbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apb",
  })
  @post("{id}")
  static createApb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
