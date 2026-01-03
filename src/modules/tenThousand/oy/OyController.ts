import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oys")
export default class OyController {
  @operation({
    summary: "Get Oys",
  })
  @get()
  static getOys = procedure({
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
