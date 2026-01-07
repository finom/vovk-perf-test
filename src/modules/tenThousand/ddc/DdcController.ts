import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddc")
export default class DdcController {
  @operation({
    summary: "Get Ddc",
  })
  @get()
  static getDdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddc",
  })
  @post("{id}")
  static createDdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
