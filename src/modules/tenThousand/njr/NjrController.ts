import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njrs")
export default class NjrController {
  @operation({
    summary: "Get Njrs",
  })
  @get()
  static getNjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njr",
  })
  @post("{id}")
  static createNjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
