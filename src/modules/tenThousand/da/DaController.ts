import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("da")
export default class DaController {
  @operation({
    summary: "Get Da",
  })
  @get()
  static getDa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Da",
  })
  @post("{id}")
  static createDa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
