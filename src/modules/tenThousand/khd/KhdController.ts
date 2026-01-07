import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khd")
export default class KhdController {
  @operation({
    summary: "Get Khd",
  })
  @get()
  static getKhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khd",
  })
  @post("{id}")
  static createKhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
