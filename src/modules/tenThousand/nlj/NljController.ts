import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlj")
export default class NljController {
  @operation({
    summary: "Get Nlj",
  })
  @get()
  static getNlj = procedure({
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
