import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haa")
export default class HaaController {
  @operation({
    summary: "Get Haa",
  })
  @get()
  static getHaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haa",
  })
  @post("{id}")
  static createHaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
