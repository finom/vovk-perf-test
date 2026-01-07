import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnf")
export default class MnfController {
  @operation({
    summary: "Get Mnf",
  })
  @get()
  static getMnf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnf",
  })
  @post("{id}")
  static createMnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
