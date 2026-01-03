import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epcs")
export default class EpcController {
  @operation({
    summary: "Get Epcs",
  })
  @get()
  static getEpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epc",
  })
  @post("{id}")
  static createEpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
