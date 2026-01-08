import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkk")
export default class DkkController {
  @operation({
    summary: "Get Dkk",
  })
  @get()
  static getDkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkk",
  })
  @post("{id}")
  static createDkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
