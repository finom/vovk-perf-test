import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmks")
export default class NmkController {
  @operation({
    summary: "Get Nmks",
  })
  @get()
  static getNmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmk",
  })
  @post("{id}")
  static createNmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
