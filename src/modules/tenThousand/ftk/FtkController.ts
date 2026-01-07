import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftk")
export default class FtkController {
  @operation({
    summary: "Get Ftk",
  })
  @get()
  static getFtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftk",
  })
  @post("{id}")
  static createFtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
