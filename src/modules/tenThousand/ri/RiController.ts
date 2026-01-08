import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ri")
export default class RiController {
  @operation({
    summary: "Get Ri",
  })
  @get()
  static getRi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ri",
  })
  @post("{id}")
  static createRi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
