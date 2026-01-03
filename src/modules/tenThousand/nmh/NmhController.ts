import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmhs")
export default class NmhController {
  @operation({
    summary: "Get Nmhs",
  })
  @get()
  static getNmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmh",
  })
  @post("{id}")
  static createNmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
