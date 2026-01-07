import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibi")
export default class IbiController {
  @operation({
    summary: "Get Ibi",
  })
  @get()
  static getIbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibi",
  })
  @post("{id}")
  static createIbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
