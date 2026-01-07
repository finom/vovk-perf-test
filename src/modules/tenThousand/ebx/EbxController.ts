import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebx")
export default class EbxController {
  @operation({
    summary: "Get Ebx",
  })
  @get()
  static getEbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebx",
  })
  @post("{id}")
  static createEbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
