import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahy")
export default class AhyController {
  @operation({
    summary: "Get Ahy",
  })
  @get()
  static getAhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahy",
  })
  @post("{id}")
  static createAhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
