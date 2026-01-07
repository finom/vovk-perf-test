import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kld")
export default class KldController {
  @operation({
    summary: "Get Kld",
  })
  @get()
  static getKld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kld",
  })
  @post("{id}")
  static createKld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
