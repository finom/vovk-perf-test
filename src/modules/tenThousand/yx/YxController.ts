import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yx")
export default class YxController {
  @operation({
    summary: "Get Yx",
  })
  @get()
  static getYx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yx",
  })
  @post("{id}")
  static createYx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
