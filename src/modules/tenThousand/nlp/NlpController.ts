import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlps")
export default class NlpController {
  @operation({
    summary: "Get Nlps",
  })
  @get()
  static getNlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlp",
  })
  @post("{id}")
  static createNlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
