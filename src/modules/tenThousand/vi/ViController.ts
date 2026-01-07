import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vi")
export default class ViController {
  @operation({
    summary: "Get Vi",
  })
  @get()
  static getVi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vi",
  })
  @post("{id}")
  static createVi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
