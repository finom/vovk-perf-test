import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ama")
export default class AmaController {
  @operation({
    summary: "Get Ama",
  })
  @get()
  static getAma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ama",
  })
  @post("{id}")
  static createAma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
