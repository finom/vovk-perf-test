import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiq")
export default class KiqController {
  @operation({
    summary: "Get Kiq",
  })
  @get()
  static getKiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiq",
  })
  @post("{id}")
  static createKiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
