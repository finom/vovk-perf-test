import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moe")
export default class MoeController {
  @operation({
    summary: "Get Moe",
  })
  @get()
  static getMoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moe",
  })
  @post("{id}")
  static createMoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
