import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbr")
export default class MbrController {
  @operation({
    summary: "Get Mbr",
  })
  @get()
  static getMbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbr",
  })
  @post("{id}")
  static createMbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
