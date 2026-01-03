import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nozs")
export default class NozController {
  @operation({
    summary: "Get Nozs",
  })
  @get()
  static getNozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noz",
  })
  @post("{id}")
  static createNoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
