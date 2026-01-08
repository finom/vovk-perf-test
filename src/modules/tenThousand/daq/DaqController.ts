import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daq")
export default class DaqController {
  @operation({
    summary: "Get Daq",
  })
  @get()
  static getDaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daq",
  })
  @post("{id}")
  static createDaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
