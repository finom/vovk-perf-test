import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlcs")
export default class NlcController {
  @operation({
    summary: "Get Nlcs",
  })
  @get()
  static getNlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlc",
  })
  @post("{id}")
  static createNlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
