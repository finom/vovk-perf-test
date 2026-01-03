import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwfs")
export default class IwfController {
  @operation({
    summary: "Get Iwfs",
  })
  @get()
  static getIwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwf",
  })
  @post("{id}")
  static createIwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
