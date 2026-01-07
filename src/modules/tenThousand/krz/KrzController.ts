import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krz")
export default class KrzController {
  @operation({
    summary: "Get Krz",
  })
  @get()
  static getKrz = procedure({
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
