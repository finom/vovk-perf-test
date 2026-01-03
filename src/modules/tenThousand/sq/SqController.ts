import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sqs")
export default class SqController {
  @operation({
    summary: "Get Sqs",
  })
  @get()
  static getSqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sq",
  })
  @post("{id}")
  static createSq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
