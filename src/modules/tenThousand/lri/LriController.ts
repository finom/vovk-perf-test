import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lri")
export default class LriController {
  @operation({
    summary: "Get Lri",
  })
  @get()
  static getLri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lri",
  })
  @post("{id}")
  static createLri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
