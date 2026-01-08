import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffd")
export default class FfdController {
  @operation({
    summary: "Get Ffd",
  })
  @get()
  static getFfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffd",
  })
  @post("{id}")
  static createFfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
