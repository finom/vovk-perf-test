import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmq")
export default class DmqController {
  @operation({
    summary: "Get Dmq",
  })
  @get()
  static getDmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmq",
  })
  @post("{id}")
  static createDmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
