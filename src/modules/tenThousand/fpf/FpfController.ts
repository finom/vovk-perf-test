import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpf")
export default class FpfController {
  @operation({
    summary: "Get Fpf",
  })
  @get()
  static getFpf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpf",
  })
  @post("{id}")
  static createFpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
