import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vq")
export default class VqController {
  @operation({
    summary: "Get Vq",
  })
  @get()
  static getVq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vq",
  })
  @post("{id}")
  static createVq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
