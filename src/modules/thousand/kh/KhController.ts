import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kh")
export default class KhController {
  @operation({
    summary: "Get Kh",
  })
  @get()
  static getKh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kh",
  })
  @post("{id}")
  static createKh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
