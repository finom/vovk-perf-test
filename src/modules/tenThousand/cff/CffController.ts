import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cff")
export default class CffController {
  @operation({
    summary: "Get Cff",
  })
  @get()
  static getCff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cff",
  })
  @post("{id}")
  static createCff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
