import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnx")
export default class FnxController {
  @operation({
    summary: "Get Fnx",
  })
  @get()
  static getFnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnx",
  })
  @post("{id}")
  static createFnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
