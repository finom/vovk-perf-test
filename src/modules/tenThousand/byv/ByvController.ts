import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byv")
export default class ByvController {
  @operation({
    summary: "Get Byv",
  })
  @get()
  static getByv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byv",
  })
  @post("{id}")
  static createByv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
