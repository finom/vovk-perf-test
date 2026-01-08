import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avq")
export default class AvqController {
  @operation({
    summary: "Get Avq",
  })
  @get()
  static getAvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avq",
  })
  @post("{id}")
  static createAvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
