import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ud")
export default class UdController {
  @operation({
    summary: "Get Ud",
  })
  @get()
  static getUd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ud",
  })
  @post("{id}")
  static createUd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
