import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwh")
export default class IwhController {
  @operation({
    summary: "Get Iwh",
  })
  @get()
  static getIwh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwh",
  })
  @post("{id}")
  static createIwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
