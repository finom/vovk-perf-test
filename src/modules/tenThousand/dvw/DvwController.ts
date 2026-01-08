import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvw")
export default class DvwController {
  @operation({
    summary: "Get Dvw",
  })
  @get()
  static getDvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvw",
  })
  @post("{id}")
  static createDvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
