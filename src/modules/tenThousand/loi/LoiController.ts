import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loi")
export default class LoiController {
  @operation({
    summary: "Get Loi",
  })
  @get()
  static getLoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loi",
  })
  @post("{id}")
  static createLoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
