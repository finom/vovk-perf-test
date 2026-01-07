import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mau")
export default class MauController {
  @operation({
    summary: "Get Mau",
  })
  @get()
  static getMau = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mau",
  })
  @post("{id}")
  static createMau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
