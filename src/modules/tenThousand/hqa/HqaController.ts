import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqa")
export default class HqaController {
  @operation({
    summary: "Get Hqa",
  })
  @get()
  static getHqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqa",
  })
  @post("{id}")
  static createHqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
