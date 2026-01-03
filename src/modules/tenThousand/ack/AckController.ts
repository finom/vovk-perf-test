import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acks")
export default class AckController {
  @operation({
    summary: "Get Acks",
  })
  @get()
  static getAcks = procedure({
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
