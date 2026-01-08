import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izy")
export default class IzyController {
  @operation({
    summary: "Get Izy",
  })
  @get()
  static getIzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izy",
  })
  @post("{id}")
  static createIzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
