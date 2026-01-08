import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grk")
export default class GrkController {
  @operation({
    summary: "Get Grk",
  })
  @get()
  static getGrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grk",
  })
  @post("{id}")
  static createGrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
