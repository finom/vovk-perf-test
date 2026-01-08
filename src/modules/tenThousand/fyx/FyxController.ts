import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyx")
export default class FyxController {
  @operation({
    summary: "Get Fyx",
  })
  @get()
  static getFyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyx",
  })
  @post("{id}")
  static createFyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
