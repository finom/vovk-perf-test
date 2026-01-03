import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsvs")
export default class NsvController {
  @operation({
    summary: "Get Nsvs",
  })
  @get()
  static getNsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsv",
  })
  @post("{id}")
  static createNsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
