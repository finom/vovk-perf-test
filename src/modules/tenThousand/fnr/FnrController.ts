import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnr")
export default class FnrController {
  @operation({
    summary: "Get Fnr",
  })
  @get()
  static getFnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnr",
  })
  @post("{id}")
  static createFnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
