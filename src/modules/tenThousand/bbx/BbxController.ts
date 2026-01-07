import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbx")
export default class BbxController {
  @operation({
    summary: "Get Bbx",
  })
  @get()
  static getBbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbx",
  })
  @post("{id}")
  static createBbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
