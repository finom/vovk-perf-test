import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lym")
export default class LymController {
  @operation({
    summary: "Get Lym",
  })
  @get()
  static getLym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lym",
  })
  @post("{id}")
  static createLym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
