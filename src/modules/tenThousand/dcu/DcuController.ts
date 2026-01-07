import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcu")
export default class DcuController {
  @operation({
    summary: "Get Dcu",
  })
  @get()
  static getDcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcu",
  })
  @post("{id}")
  static createDcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
