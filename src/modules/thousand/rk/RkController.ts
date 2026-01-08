import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rk")
export default class RkController {
  @operation({
    summary: "Get Rk",
  })
  @get()
  static getRk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rk",
  })
  @post("{id}")
  static createRk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
