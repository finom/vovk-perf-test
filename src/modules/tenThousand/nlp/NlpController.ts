import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlp")
export default class NlpController {
  @operation({
    summary: "Get Nlp",
  })
  @get()
  static getNlp = procedure({
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
