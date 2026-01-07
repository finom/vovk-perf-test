import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpg")
export default class JpgController {
  @operation({
    summary: "Get Jpg",
  })
  @get()
  static getJpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpg",
  })
  @post("{id}")
  static createJpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
