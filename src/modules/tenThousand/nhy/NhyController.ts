import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhies")
export default class NhyController {
  @operation({
    summary: "Get Nhies",
  })
  @get()
  static getNhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhy",
  })
  @post("{id}")
  static createNhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
