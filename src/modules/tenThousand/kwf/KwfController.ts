import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwf")
export default class KwfController {
  @operation({
    summary: "Get Kwf",
  })
  @get()
  static getKwf = procedure({
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
