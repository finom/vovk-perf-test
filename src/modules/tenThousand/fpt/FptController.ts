import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpt")
export default class FptController {
  @operation({
    summary: "Get Fpt",
  })
  @get()
  static getFpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpt",
  })
  @post("{id}")
  static createFpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
