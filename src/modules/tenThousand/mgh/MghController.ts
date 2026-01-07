import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgh")
export default class MghController {
  @operation({
    summary: "Get Mgh",
  })
  @get()
  static getMgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgh",
  })
  @post("{id}")
  static createMgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
