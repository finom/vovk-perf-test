import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiqs")
export default class KiqController {
  @operation({
    summary: "Get Kiqs",
  })
  @get()
  static getKiqs = procedure({
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
