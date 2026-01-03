import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loas")
export default class LoaController {
  @operation({
    summary: "Get Loas",
  })
  @get()
  static getLoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loa",
  })
  @post("{id}")
  static createLoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
