import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rxes")
export default class RxController {
  @operation({
    summary: "Get Rxes",
  })
  @get()
  static getRxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rx",
  })
  @post("{id}")
  static createRx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
