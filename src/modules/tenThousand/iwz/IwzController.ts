import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwz")
export default class IwzController {
  @operation({
    summary: "Get Iwz",
  })
  @get()
  static getIwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwz",
  })
  @post("{id}")
  static createIwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
