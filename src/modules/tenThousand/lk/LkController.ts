import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lk")
export default class LkController {
  @operation({
    summary: "Get Lk",
  })
  @get()
  static getLk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lk",
  })
  @post("{id}")
  static createLk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
