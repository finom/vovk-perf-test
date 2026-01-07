import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktp")
export default class KtpController {
  @operation({
    summary: "Get Ktp",
  })
  @get()
  static getKtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktp",
  })
  @post("{id}")
  static createKtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
