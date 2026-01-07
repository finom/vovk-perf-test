import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmf")
export default class NmfController {
  @operation({
    summary: "Get Nmf",
  })
  @get()
  static getNmf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmf",
  })
  @post("{id}")
  static createNmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
