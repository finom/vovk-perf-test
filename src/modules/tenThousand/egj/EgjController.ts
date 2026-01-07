import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egj")
export default class EgjController {
  @operation({
    summary: "Get Egj",
  })
  @get()
  static getEgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egj",
  })
  @post("{id}")
  static createEgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
