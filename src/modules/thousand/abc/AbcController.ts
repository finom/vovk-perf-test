import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abc")
export default class AbcController {
  @operation({
    summary: "Get Abc",
  })
  @get()
  static getAbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abc",
  })
  @post("{id}")
  static createAbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
