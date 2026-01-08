import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fly")
export default class FlyController {
  @operation({
    summary: "Get Fly",
  })
  @get()
  static getFly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fly",
  })
  @post("{id}")
  static createFly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
