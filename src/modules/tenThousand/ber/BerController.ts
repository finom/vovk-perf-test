import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bers")
export default class BerController {
  @operation({
    summary: "Get Bers",
  })
  @get()
  static getBers = procedure({
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
