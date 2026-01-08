import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiu")
export default class HiuController {
  @operation({
    summary: "Get Hiu",
  })
  @get()
  static getHiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiu",
  })
  @post("{id}")
  static createHiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
