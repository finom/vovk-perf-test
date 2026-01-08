import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqa")
export default class MqaController {
  @operation({
    summary: "Get Mqa",
  })
  @get()
  static getMqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqa",
  })
  @post("{id}")
  static createMqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
