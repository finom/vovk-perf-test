import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evk")
export default class EvkController {
  @operation({
    summary: "Get Evk",
  })
  @get()
  static getEvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evk",
  })
  @post("{id}")
  static createEvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
