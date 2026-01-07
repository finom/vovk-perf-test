import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idc")
export default class IdcController {
  @operation({
    summary: "Get Idc",
  })
  @get()
  static getIdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idc",
  })
  @post("{id}")
  static createIdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
