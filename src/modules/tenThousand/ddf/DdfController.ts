import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddf")
export default class DdfController {
  @operation({
    summary: "Get Ddf",
  })
  @get()
  static getDdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddf",
  })
  @post("{id}")
  static createDdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
