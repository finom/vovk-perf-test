import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmps")
export default class NmpController {
  @operation({
    summary: "Get Nmps",
  })
  @get()
  static getNmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmp",
  })
  @post("{id}")
  static createNmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
