import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoq")
export default class AoqController {
  @operation({
    summary: "Get Aoq",
  })
  @get()
  static getAoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoq",
  })
  @post("{id}")
  static createAoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
