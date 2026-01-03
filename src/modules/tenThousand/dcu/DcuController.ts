import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcus")
export default class DcuController {
  @operation({
    summary: "Get Dcus",
  })
  @get()
  static getDcus = procedure({
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
