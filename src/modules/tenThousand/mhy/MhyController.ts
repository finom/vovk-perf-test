import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhy")
export default class MhyController {
  @operation({
    summary: "Get Mhy",
  })
  @get()
  static getMhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhy",
  })
  @post("{id}")
  static createMhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
