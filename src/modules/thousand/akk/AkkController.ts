import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akk")
export default class AkkController {
  @operation({
    summary: "Get Akk",
  })
  @get()
  static getAkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akk",
  })
  @post("{id}")
  static createAkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
