import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndjs")
export default class NdjController {
  @operation({
    summary: "Get Ndjs",
  })
  @get()
  static getNdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndj",
  })
  @post("{id}")
  static createNdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
