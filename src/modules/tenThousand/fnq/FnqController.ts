import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnq")
export default class FnqController {
  @operation({
    summary: "Get Fnq",
  })
  @get()
  static getFnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnq",
  })
  @post("{id}")
  static createFnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
