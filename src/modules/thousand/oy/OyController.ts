import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oy")
export default class OyController {
  @operation({
    summary: "Get Oy",
  })
  @get()
  static getOy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oy",
  })
  @post("{id}")
  static createOy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
