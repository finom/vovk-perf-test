import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayx")
export default class AyxController {
  @operation({
    summary: "Get Ayx",
  })
  @get()
  static getAyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayx",
  })
  @post("{id}")
  static createAyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
