import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqn")
export default class HqnController {
  @operation({
    summary: "Get Hqn",
  })
  @get()
  static getHqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqn",
  })
  @post("{id}")
  static createHqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
