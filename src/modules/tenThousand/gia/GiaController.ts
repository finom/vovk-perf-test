import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gia")
export default class GiaController {
  @operation({
    summary: "Get Gia",
  })
  @get()
  static getGia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gia",
  })
  @post("{id}")
  static createGia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
