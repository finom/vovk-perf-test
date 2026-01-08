import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avw")
export default class AvwController {
  @operation({
    summary: "Get Avw",
  })
  @get()
  static getAvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avw",
  })
  @post("{id}")
  static createAvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
