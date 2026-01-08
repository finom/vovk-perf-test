import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bck")
export default class BckController {
  @operation({
    summary: "Get Bck",
  })
  @get()
  static getBck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bck",
  })
  @post("{id}")
  static createBck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
