import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdf")
export default class FdfController {
  @operation({
    summary: "Get Fdf",
  })
  @get()
  static getFdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdf",
  })
  @post("{id}")
  static createFdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
