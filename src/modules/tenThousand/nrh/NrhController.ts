import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrh")
export default class NrhController {
  @operation({
    summary: "Get Nrh",
  })
  @get()
  static getNrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrh",
  })
  @post("{id}")
  static createNrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
