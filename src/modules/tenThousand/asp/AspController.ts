import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asps")
export default class AspController {
  @operation({
    summary: "Get Asps",
  })
  @get()
  static getAsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asp",
  })
  @post("{id}")
  static createAsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
