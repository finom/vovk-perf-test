import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icq")
export default class IcqController {
  @operation({
    summary: "Get Icq",
  })
  @get()
  static getIcq = procedure({
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
