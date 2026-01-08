import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mih")
export default class MihController {
  @operation({
    summary: "Get Mih",
  })
  @get()
  static getMih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mih",
  })
  @post("{id}")
  static createMih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
