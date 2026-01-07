import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdb")
export default class FdbController {
  @operation({
    summary: "Get Fdb",
  })
  @get()
  static getFdb = procedure({
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
