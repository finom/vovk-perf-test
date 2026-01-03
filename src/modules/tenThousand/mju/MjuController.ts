import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjus")
export default class MjuController {
  @operation({
    summary: "Get Mjus",
  })
  @get()
  static getMjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mju",
  })
  @post("{id}")
  static createMju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
