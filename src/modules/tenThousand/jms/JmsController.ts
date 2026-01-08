import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jms")
export default class JmsController {
  @operation({
    summary: "Get Jms",
  })
  @get()
  static getJms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jms",
  })
  @post("{id}")
  static createJms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
