import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmas")
export default class KmaController {
  @operation({
    summary: "Get Kmas",
  })
  @get()
  static getKmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kma",
  })
  @post("{id}")
  static createKma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
