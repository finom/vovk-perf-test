import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amfs")
export default class AmfController {
  @operation({
    summary: "Get Amfs",
  })
  @get()
  static getAmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amf",
  })
  @post("{id}")
  static createAmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
