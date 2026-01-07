import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rx")
export default class RxController {
  @operation({
    summary: "Get Rx",
  })
  @get()
  static getRx = procedure({
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
