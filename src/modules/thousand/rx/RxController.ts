import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rx")
export default class RxController {
  @operation({
    summary: "Get Rx",
  })
  @get()
  static getRx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rx",
  })
  @post("{id}")
  static createRx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
