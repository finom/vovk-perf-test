import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmh")
export default class CmhController {
  @operation({
    summary: "Get Cmh",
  })
  @get()
  static getCmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmh",
  })
  @post("{id}")
  static createCmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
