import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enp")
export default class EnpController {
  @operation({
    summary: "Get Enp",
  })
  @get()
  static getEnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enp",
  })
  @post("{id}")
  static createEnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
