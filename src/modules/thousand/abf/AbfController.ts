import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abf")
export default class AbfController {
  @operation({
    summary: "Get Abf",
  })
  @get()
  static getAbf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abf",
  })
  @post("{id}")
  static createAbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
