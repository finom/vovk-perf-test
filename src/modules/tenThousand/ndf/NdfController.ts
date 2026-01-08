import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndf")
export default class NdfController {
  @operation({
    summary: "Get Ndf",
  })
  @get()
  static getNdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndf",
  })
  @post("{id}")
  static createNdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
