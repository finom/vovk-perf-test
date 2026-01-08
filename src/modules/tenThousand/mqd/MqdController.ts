import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqd")
export default class MqdController {
  @operation({
    summary: "Get Mqd",
  })
  @get()
  static getMqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqd",
  })
  @post("{id}")
  static createMqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
