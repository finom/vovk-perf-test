import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffs")
export default class FfsController {
  @operation({
    summary: "Get Ffs",
  })
  @get()
  static getFfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffs",
  })
  @post("{id}")
  static createFfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
