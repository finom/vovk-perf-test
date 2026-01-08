import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvx")
export default class DvxController {
  @operation({
    summary: "Get Dvx",
  })
  @get()
  static getDvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvx",
  })
  @post("{id}")
  static createDvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
