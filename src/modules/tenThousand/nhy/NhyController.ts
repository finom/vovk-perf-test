import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhy")
export default class NhyController {
  @operation({
    summary: "Get Nhy",
  })
  @get()
  static getNhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhy",
  })
  @post("{id}")
  static createNhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
