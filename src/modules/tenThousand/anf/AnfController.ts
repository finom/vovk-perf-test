import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anfs")
export default class AnfController {
  @operation({
    summary: "Get Anfs",
  })
  @get()
  static getAnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anf",
  })
  @post("{id}")
  static createAnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
