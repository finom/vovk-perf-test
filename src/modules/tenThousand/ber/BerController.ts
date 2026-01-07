import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ber")
export default class BerController {
  @operation({
    summary: "Get Ber",
  })
  @get()
  static getBer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ber",
  })
  @post("{id}")
  static createBer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
