import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsb")
export default class FsbController {
  @operation({
    summary: "Get Fsb",
  })
  @get()
  static getFsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsb",
  })
  @post("{id}")
  static createFsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
