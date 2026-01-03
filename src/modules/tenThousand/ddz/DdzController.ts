import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddzs")
export default class DdzController {
  @operation({
    summary: "Get Ddzs",
  })
  @get()
  static getDdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddz",
  })
  @post("{id}")
  static createDdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
