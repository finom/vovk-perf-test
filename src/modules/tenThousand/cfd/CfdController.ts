import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfd")
export default class CfdController {
  @operation({
    summary: "Get Cfd",
  })
  @get()
  static getCfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfd",
  })
  @post("{id}")
  static createCfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
