import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsq")
export default class FsqController {
  @operation({
    summary: "Get Fsq",
  })
  @get()
  static getFsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsq",
  })
  @post("{id}")
  static createFsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
