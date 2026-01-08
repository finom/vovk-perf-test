import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ciy")
export default class CiyController {
  @operation({
    summary: "Get Ciy",
  })
  @get()
  static getCiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciy",
  })
  @post("{id}")
  static createCiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
