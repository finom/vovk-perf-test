import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biq")
export default class BiqController {
  @operation({
    summary: "Get Biq",
  })
  @get()
  static getBiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biq",
  })
  @post("{id}")
  static createBiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
