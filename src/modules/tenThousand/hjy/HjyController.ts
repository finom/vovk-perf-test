import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjy")
export default class HjyController {
  @operation({
    summary: "Get Hjy",
  })
  @get()
  static getHjy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjy",
  })
  @post("{id}")
  static createHjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
