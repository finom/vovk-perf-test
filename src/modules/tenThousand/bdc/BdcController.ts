import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdc")
export default class BdcController {
  @operation({
    summary: "Get Bdc",
  })
  @get()
  static getBdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdc",
  })
  @post("{id}")
  static createBdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
