import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgl")
export default class HglController {
  @operation({
    summary: "Get Hgl",
  })
  @get()
  static getHgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgl",
  })
  @post("{id}")
  static createHgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
