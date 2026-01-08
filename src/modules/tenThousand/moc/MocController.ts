import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moc")
export default class MocController {
  @operation({
    summary: "Get Moc",
  })
  @get()
  static getMoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moc",
  })
  @post("{id}")
  static createMoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
