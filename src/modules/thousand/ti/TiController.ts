import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ti")
export default class TiController {
  @operation({
    summary: "Get Ti",
  })
  @get()
  static getTi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ti",
  })
  @post("{id}")
  static createTi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
