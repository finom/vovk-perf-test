import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fey")
export default class FeyController {
  @operation({
    summary: "Get Fey",
  })
  @get()
  static getFey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fey",
  })
  @post("{id}")
  static createFey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
