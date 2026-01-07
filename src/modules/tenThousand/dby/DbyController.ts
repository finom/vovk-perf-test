import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dby")
export default class DbyController {
  @operation({
    summary: "Get Dby",
  })
  @get()
  static getDby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dby",
  })
  @post("{id}")
  static createDby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
