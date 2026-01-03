import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nals")
export default class NalController {
  @operation({
    summary: "Get Nals",
  })
  @get()
  static getNals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nal",
  })
  @post("{id}")
  static createNal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
