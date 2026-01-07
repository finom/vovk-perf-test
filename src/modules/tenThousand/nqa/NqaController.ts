import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqa")
export default class NqaController {
  @operation({
    summary: "Get Nqa",
  })
  @get()
  static getNqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqa",
  })
  @post("{id}")
  static createNqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
