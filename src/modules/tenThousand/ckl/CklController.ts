import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckl")
export default class CklController {
  @operation({
    summary: "Get Ckl",
  })
  @get()
  static getCkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckl",
  })
  @post("{id}")
  static createCkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
