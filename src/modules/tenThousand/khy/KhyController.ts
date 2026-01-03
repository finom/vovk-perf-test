import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khies")
export default class KhyController {
  @operation({
    summary: "Get Khies",
  })
  @get()
  static getKhies = procedure({
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
