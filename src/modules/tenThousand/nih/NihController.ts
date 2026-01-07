import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nih")
export default class NihController {
  @operation({
    summary: "Get Nih",
  })
  @get()
  static getNih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nih",
  })
  @post("{id}")
  static createNih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
