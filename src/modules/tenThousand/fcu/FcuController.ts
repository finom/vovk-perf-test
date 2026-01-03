import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcus")
export default class FcuController {
  @operation({
    summary: "Get Fcus",
  })
  @get()
  static getFcus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcu",
  })
  @post("{id}")
  static createFcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
