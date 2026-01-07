import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iir")
export default class IirController {
  @operation({
    summary: "Get Iir",
  })
  @get()
  static getIir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iir",
  })
  @post("{id}")
  static createIir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
