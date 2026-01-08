import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckk")
export default class CkkController {
  @operation({
    summary: "Get Ckk",
  })
  @get()
  static getCkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckk",
  })
  @post("{id}")
  static createCkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
