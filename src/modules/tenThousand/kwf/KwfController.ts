import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwfs")
export default class KwfController {
  @operation({
    summary: "Get Kwfs",
  })
  @get()
  static getKwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwf",
  })
  @post("{id}")
  static createKwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
