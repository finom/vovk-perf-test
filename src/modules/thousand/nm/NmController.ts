import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nm")
export default class NmController {
  @operation({
    summary: "Get Nm",
  })
  @get()
  static getNm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nm",
  })
  @post("{id}")
  static createNm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
