import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsr")
export default class NsrController {
  @operation({
    summary: "Get Nsr",
  })
  @get()
  static getNsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsr",
  })
  @post("{id}")
  static createNsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
