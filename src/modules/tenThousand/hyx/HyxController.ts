import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyx")
export default class HyxController {
  @operation({
    summary: "Get Hyx",
  })
  @get()
  static getHyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyx",
  })
  @post("{id}")
  static createHyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
