import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsd")
export default class FsdController {
  @operation({
    summary: "Get Fsd",
  })
  @get()
  static getFsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsd",
  })
  @post("{id}")
  static createFsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
