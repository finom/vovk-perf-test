import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsn")
export default class FsnController {
  @operation({
    summary: "Get Fsn",
  })
  @get()
  static getFsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsn",
  })
  @post("{id}")
  static createFsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
