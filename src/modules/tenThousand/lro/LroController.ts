import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lro")
export default class LroController {
  @operation({
    summary: "Get Lro",
  })
  @get()
  static getLro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lro",
  })
  @post("{id}")
  static createLro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
