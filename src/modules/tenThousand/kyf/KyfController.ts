import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyfs")
export default class KyfController {
  @operation({
    summary: "Get Kyfs",
  })
  @get()
  static getKyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyf",
  })
  @post("{id}")
  static createKyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
