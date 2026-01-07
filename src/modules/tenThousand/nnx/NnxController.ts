import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnx")
export default class NnxController {
  @operation({
    summary: "Get Nnx",
  })
  @get()
  static getNnx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnx",
  })
  @post("{id}")
  static createNnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
