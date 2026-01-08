import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ack")
export default class AckController {
  @operation({
    summary: "Get Ack",
  })
  @get()
  static getAck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ack",
  })
  @post("{id}")
  static createAck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
