import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsx")
export default class FsxController {
  @operation({
    summary: "Get Fsx",
  })
  @get()
  static getFsx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsx",
  })
  @post("{id}")
  static createFsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
