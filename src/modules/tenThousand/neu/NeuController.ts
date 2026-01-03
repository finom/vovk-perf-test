import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neus")
export default class NeuController {
  @operation({
    summary: "Get Neus",
  })
  @get()
  static getNeus = procedure({
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
