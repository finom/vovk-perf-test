import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lec")
export default class LecController {
  @operation({
    summary: "Get Lec",
  })
  @get()
  static getLec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lec",
  })
  @post("{id}")
  static createLec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
