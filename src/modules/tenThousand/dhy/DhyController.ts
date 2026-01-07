import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhy")
export default class DhyController {
  @operation({
    summary: "Get Dhy",
  })
  @get()
  static getDhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhy",
  })
  @post("{id}")
  static createDhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
