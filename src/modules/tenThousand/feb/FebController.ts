import { procedure, prefix, get, post, operation } from "vovk";

@prefix("febs")
export default class FebController {
  @operation({
    summary: "Get Febs",
  })
  @get()
  static getFebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feb",
  })
  @post("{id}")
  static createFeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
