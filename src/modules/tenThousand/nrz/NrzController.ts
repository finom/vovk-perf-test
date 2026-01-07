import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrz")
export default class NrzController {
  @operation({
    summary: "Get Nrz",
  })
  @get()
  static getNrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrz",
  })
  @post("{id}")
  static createNrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
