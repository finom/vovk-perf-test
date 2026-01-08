import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exk")
export default class ExkController {
  @operation({
    summary: "Get Exk",
  })
  @get()
  static getExk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exk",
  })
  @post("{id}")
  static createExk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
