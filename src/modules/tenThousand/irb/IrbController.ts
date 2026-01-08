import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irb")
export default class IrbController {
  @operation({
    summary: "Get Irb",
  })
  @get()
  static getIrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irb",
  })
  @post("{id}")
  static createIrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
