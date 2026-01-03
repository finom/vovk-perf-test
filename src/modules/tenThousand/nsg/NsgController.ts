import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsgs")
export default class NsgController {
  @operation({
    summary: "Get Nsgs",
  })
  @get()
  static getNsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsg",
  })
  @post("{id}")
  static createNsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
