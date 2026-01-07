import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liu")
export default class LiuController {
  @operation({
    summary: "Get Liu",
  })
  @get()
  static getLiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liu",
  })
  @post("{id}")
  static createLiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
