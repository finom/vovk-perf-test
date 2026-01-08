import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cow")
export default class CowController {
  @operation({
    summary: "Get Cow",
  })
  @get()
  static getCow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cow",
  })
  @post("{id}")
  static createCow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
