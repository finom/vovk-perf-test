import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmh")
export default class NmhController {
  @operation({
    summary: "Get Nmh",
  })
  @get()
  static getNmh = procedure({
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
