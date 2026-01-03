import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abcs")
export default class AbcController {
  @operation({
    summary: "Get Abcs",
  })
  @get()
  static getAbcs = procedure({
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
