import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsf")
export default class FsfController {
  @operation({
    summary: "Get Fsf",
  })
  @get()
  static getFsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsf",
  })
  @post("{id}")
  static createFsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
