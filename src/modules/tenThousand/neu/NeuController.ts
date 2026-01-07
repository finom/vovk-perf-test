import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neu")
export default class NeuController {
  @operation({
    summary: "Get Neu",
  })
  @get()
  static getNeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neu",
  })
  @post("{id}")
  static createNeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
