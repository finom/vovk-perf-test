import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bus")
export default class BusController {
  @operation({
    summary: "Get Bus",
  })
  @get()
  static getBus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bus",
  })
  @post("{id}")
  static createBus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
