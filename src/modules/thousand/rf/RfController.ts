import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rf")
export default class RfController {
  @operation({
    summary: "Get Rf",
  })
  @get()
  static getRf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rf",
  })
  @post("{id}")
  static createRf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
