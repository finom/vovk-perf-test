import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elh")
export default class ElhController {
  @operation({
    summary: "Get Elh",
  })
  @get()
  static getElh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elh",
  })
  @post("{id}")
  static createElh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
