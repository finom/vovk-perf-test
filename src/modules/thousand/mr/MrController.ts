import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mr")
export default class MrController {
  @operation({
    summary: "Get Mr",
  })
  @get()
  static getMr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mr",
  })
  @post("{id}")
  static createMr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
