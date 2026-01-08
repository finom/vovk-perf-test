import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myi")
export default class MyiController {
  @operation({
    summary: "Get Myi",
  })
  @get()
  static getMyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myi",
  })
  @post("{id}")
  static createMyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
