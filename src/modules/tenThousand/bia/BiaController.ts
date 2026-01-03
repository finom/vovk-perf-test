import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bias")
export default class BiaController {
  @operation({
    summary: "Get Bias",
  })
  @get()
  static getBias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bia",
  })
  @post("{id}")
  static createBia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
