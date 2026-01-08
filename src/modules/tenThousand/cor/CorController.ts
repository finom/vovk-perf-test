import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cor")
export default class CorController {
  @operation({
    summary: "Get Cor",
  })
  @get()
  static getCor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cor",
  })
  @post("{id}")
  static createCor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
