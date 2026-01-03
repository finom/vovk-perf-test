import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htus")
export default class HtuController {
  @operation({
    summary: "Get Htus",
  })
  @get()
  static getHtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htu",
  })
  @post("{id}")
  static createHtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
