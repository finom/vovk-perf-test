import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrq")
export default class NrqController {
  @operation({
    summary: "Get Nrq",
  })
  @get()
  static getNrq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrq",
  })
  @post("{id}")
  static createNrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
