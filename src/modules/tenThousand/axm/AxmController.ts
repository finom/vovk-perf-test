import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axms")
export default class AxmController {
  @operation({
    summary: "Get Axms",
  })
  @get()
  static getAxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axm",
  })
  @post("{id}")
  static createAxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
