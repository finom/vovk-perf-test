import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngy")
export default class NgyController {
  @operation({
    summary: "Get Ngy",
  })
  @get()
  static getNgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngy",
  })
  @post("{id}")
  static createNgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
