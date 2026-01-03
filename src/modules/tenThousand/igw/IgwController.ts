import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igws")
export default class IgwController {
  @operation({
    summary: "Get Igws",
  })
  @get()
  static getIgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igw",
  })
  @post("{id}")
  static createIgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
