import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilps")
export default class IlpController {
  @operation({
    summary: "Get Ilps",
  })
  @get()
  static getIlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilp",
  })
  @post("{id}")
  static createIlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
