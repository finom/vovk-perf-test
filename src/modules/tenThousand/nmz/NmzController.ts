import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmzs")
export default class NmzController {
  @operation({
    summary: "Get Nmzs",
  })
  @get()
  static getNmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmz",
  })
  @post("{id}")
  static createNmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
