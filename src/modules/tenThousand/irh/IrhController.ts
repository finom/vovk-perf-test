import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irh")
export default class IrhController {
  @operation({
    summary: "Get Irh",
  })
  @get()
  static getIrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irh",
  })
  @post("{id}")
  static createIrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
