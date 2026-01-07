import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcn")
export default class FcnController {
  @operation({
    summary: "Get Fcn",
  })
  @get()
  static getFcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcn",
  })
  @post("{id}")
  static createFcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
