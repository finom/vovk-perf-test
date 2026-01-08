import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqp")
export default class NqpController {
  @operation({
    summary: "Get Nqp",
  })
  @get()
  static getNqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqp",
  })
  @post("{id}")
  static createNqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
