import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exds")
export default class ExdController {
  @operation({
    summary: "Get Exds",
  })
  @get()
  static getExds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exd",
  })
  @post("{id}")
  static createExd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
