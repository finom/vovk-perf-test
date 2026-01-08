import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvb")
export default class DvbController {
  @operation({
    summary: "Get Dvb",
  })
  @get()
  static getDvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvb",
  })
  @post("{id}")
  static createDvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
