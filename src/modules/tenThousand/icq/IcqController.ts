import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icqs")
export default class IcqController {
  @operation({
    summary: "Get Icqs",
  })
  @get()
  static getIcqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icq",
  })
  @post("{id}")
  static createIcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
