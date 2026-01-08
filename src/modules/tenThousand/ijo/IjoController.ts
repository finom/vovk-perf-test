import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijo")
export default class IjoController {
  @operation({
    summary: "Get Ijo",
  })
  @get()
  static getIjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijo",
  })
  @post("{id}")
  static createIjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
