import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ds")
export default class DsController {
  @operation({
    summary: "Get Ds",
  })
  @get()
  static getDs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ds",
  })
  @post("{id}")
  static createDs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
