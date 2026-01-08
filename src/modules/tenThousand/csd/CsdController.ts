import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csd")
export default class CsdController {
  @operation({
    summary: "Get Csd",
  })
  @get()
  static getCsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csd",
  })
  @post("{id}")
  static createCsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
