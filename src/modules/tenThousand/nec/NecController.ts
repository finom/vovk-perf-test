import { procedure, prefix, get, post, operation } from "vovk";

@prefix("necs")
export default class NecController {
  @operation({
    summary: "Get Necs",
  })
  @get()
  static getNecs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nec",
  })
  @post("{id}")
  static createNec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
