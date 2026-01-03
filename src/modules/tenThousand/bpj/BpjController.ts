import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpjs")
export default class BpjController {
  @operation({
    summary: "Get Bpjs",
  })
  @get()
  static getBpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpj",
  })
  @post("{id}")
  static createBpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
