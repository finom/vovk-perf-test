import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejk")
export default class EjkController {
  @operation({
    summary: "Get Ejk",
  })
  @get()
  static getEjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejk",
  })
  @post("{id}")
  static createEjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
