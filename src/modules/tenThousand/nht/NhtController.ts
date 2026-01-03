import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhts")
export default class NhtController {
  @operation({
    summary: "Get Nhts",
  })
  @get()
  static getNhts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nht",
  })
  @post("{id}")
  static createNht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
