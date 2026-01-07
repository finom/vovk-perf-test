import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrk")
export default class NrkController {
  @operation({
    summary: "Get Nrk",
  })
  @get()
  static getNrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrk",
  })
  @post("{id}")
  static createNrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
