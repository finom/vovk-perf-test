import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvu")
export default class DvuController {
  @operation({
    summary: "Get Dvu",
  })
  @get()
  static getDvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvu",
  })
  @post("{id}")
  static createDvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
