import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihy")
export default class IhyController {
  @operation({
    summary: "Get Ihy",
  })
  @get()
  static getIhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihy",
  })
  @post("{id}")
  static createIhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
