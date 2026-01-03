import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nljs")
export default class NljController {
  @operation({
    summary: "Get Nljs",
  })
  @get()
  static getNljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlj",
  })
  @post("{id}")
  static createNlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
