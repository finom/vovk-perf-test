import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fed")
export default class FedController {
  @operation({
    summary: "Get Fed",
  })
  @get()
  static getFed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fed",
  })
  @post("{id}")
  static createFed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
