import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iq")
export default class IqController {
  @operation({
    summary: "Get Iq",
  })
  @get()
  static getIq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iq",
  })
  @post("{id}")
  static createIq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
