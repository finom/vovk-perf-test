import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drt")
export default class DrtController {
  @operation({
    summary: "Get Drt",
  })
  @get()
  static getDrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drt",
  })
  @post("{id}")
  static createDrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
