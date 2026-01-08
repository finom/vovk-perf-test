import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mby")
export default class MbyController {
  @operation({
    summary: "Get Mby",
  })
  @get()
  static getMby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mby",
  })
  @post("{id}")
  static createMby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
