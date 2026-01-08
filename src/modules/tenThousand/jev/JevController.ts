import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jev")
export default class JevController {
  @operation({
    summary: "Get Jev",
  })
  @get()
  static getJev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jev",
  })
  @post("{id}")
  static createJev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
