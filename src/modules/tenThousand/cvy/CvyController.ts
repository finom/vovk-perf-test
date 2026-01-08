import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvy")
export default class CvyController {
  @operation({
    summary: "Get Cvy",
  })
  @get()
  static getCvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvy",
  })
  @post("{id}")
  static createCvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
