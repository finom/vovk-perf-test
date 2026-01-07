import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khy")
export default class KhyController {
  @operation({
    summary: "Get Khy",
  })
  @get()
  static getKhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khy",
  })
  @post("{id}")
  static createKhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
