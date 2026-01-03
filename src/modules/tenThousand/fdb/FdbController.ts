import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdbs")
export default class FdbController {
  @operation({
    summary: "Get Fdbs",
  })
  @get()
  static getFdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdb",
  })
  @post("{id}")
  static createFdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
