import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iou")
export default class IouController {
  @operation({
    summary: "Get Iou",
  })
  @get()
  static getIou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iou",
  })
  @post("{id}")
  static createIou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
