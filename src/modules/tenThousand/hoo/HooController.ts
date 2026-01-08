import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoo")
export default class HooController {
  @operation({
    summary: "Get Hoo",
  })
  @get()
  static getHoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoo",
  })
  @post("{id}")
  static createHoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
