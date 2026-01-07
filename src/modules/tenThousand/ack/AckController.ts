import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ack")
export default class AckController {
  @operation({
    summary: "Get Ack",
  })
  @get()
  static getAck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ack",
  })
  @post("{id}")
  static createAck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
