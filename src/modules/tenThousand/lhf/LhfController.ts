import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhf")
export default class LhfController {
  @operation({
    summary: "Get Lhf",
  })
  @get()
  static getLhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhf",
  })
  @post("{id}")
  static createLhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
