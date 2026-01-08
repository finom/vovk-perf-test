import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvn")
export default class DvnController {
  @operation({
    summary: "Get Dvn",
  })
  @get()
  static getDvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvn",
  })
  @post("{id}")
  static createDvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
