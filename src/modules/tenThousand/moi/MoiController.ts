import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moi")
export default class MoiController {
  @operation({
    summary: "Get Moi",
  })
  @get()
  static getMoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moi",
  })
  @post("{id}")
  static createMoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
