import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axs")
export default class AxsController {
  @operation({
    summary: "Get Axs",
  })
  @get()
  static getAxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axs",
  })
  @post("{id}")
  static createAxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
