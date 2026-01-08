import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goi")
export default class GoiController {
  @operation({
    summary: "Get Goi",
  })
  @get()
  static getGoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goi",
  })
  @post("{id}")
  static createGoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
