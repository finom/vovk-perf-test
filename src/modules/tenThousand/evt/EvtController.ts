import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evt")
export default class EvtController {
  @operation({
    summary: "Get Evt",
  })
  @get()
  static getEvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evt",
  })
  @post("{id}")
  static createEvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
