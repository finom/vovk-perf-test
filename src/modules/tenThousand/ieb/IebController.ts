import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieb")
export default class IebController {
  @operation({
    summary: "Get Ieb",
  })
  @get()
  static getIeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieb",
  })
  @post("{id}")
  static createIeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
