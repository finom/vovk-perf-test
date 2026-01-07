import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcf")
export default class McfController {
  @operation({
    summary: "Get Mcf",
  })
  @get()
  static getMcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcf",
  })
  @post("{id}")
  static createMcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
