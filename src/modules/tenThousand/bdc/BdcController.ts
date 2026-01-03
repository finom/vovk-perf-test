import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdcs")
export default class BdcController {
  @operation({
    summary: "Get Bdcs",
  })
  @get()
  static getBdcs = procedure({
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
