import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciq")
export default class CiqController {
  @operation({
    summary: "Get Ciq",
  })
  @get()
  static getCiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciq",
  })
  @post("{id}")
  static createCiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
