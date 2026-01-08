import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avp")
export default class AvpController {
  @operation({
    summary: "Get Avp",
  })
  @get()
  static getAvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avp",
  })
  @post("{id}")
  static createAvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
