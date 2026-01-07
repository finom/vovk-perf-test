import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndc")
export default class NdcController {
  @operation({
    summary: "Get Ndc",
  })
  @get()
  static getNdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndc",
  })
  @post("{id}")
  static createNdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
