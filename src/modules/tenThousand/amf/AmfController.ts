import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amf")
export default class AmfController {
  @operation({
    summary: "Get Amf",
  })
  @get()
  static getAmf = procedure({
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
