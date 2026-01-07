import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvy")
export default class CvyController {
  @operation({
    summary: "Get Cvy",
  })
  @get()
  static getCvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvy",
  })
  @post("{id}")
  static createCvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
