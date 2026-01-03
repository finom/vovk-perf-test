import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbrs")
export default class MbrController {
  @operation({
    summary: "Get Mbrs",
  })
  @get()
  static getMbrs = procedure({
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
