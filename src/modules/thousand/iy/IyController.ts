import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iy")
export default class IyController {
  @operation({
    summary: "Get Iy",
  })
  @get()
  static getIy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iy",
  })
  @post("{id}")
  static createIy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
