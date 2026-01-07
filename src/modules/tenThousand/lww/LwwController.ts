import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lww")
export default class LwwController {
  @operation({
    summary: "Get Lww",
  })
  @get()
  static getLww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lww",
  })
  @post("{id}")
  static createLww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
