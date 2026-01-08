import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqk")
export default class LqkController {
  @operation({
    summary: "Get Lqk",
  })
  @get()
  static getLqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqk",
  })
  @post("{id}")
  static createLqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
