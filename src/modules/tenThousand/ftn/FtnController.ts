import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftn")
export default class FtnController {
  @operation({
    summary: "Get Ftn",
  })
  @get()
  static getFtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftn",
  })
  @post("{id}")
  static createFtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
