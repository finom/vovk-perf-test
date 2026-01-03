import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krzs")
export default class KrzController {
  @operation({
    summary: "Get Krzs",
  })
  @get()
  static getKrzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krz",
  })
  @post("{id}")
  static createKrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
