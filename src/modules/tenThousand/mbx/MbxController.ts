import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbxes")
export default class MbxController {
  @operation({
    summary: "Get Mbxes",
  })
  @get()
  static getMbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbx",
  })
  @post("{id}")
  static createMbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
