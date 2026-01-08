import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mot")
export default class MotController {
  @operation({
    summary: "Get Mot",
  })
  @get()
  static getMot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mot",
  })
  @post("{id}")
  static createMot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
