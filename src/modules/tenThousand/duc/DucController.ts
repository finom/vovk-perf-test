import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duc")
export default class DucController {
  @operation({
    summary: "Get Duc",
  })
  @get()
  static getDuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duc",
  })
  @post("{id}")
  static createDuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
