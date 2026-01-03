import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcks")
export default class FckController {
  @operation({
    summary: "Get Fcks",
  })
  @get()
  static getFcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fck",
  })
  @post("{id}")
  static createFck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
