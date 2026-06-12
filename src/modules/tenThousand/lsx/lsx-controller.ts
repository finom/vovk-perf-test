import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsx")
export default class LsxController {
  @operation({
    summary: "Get Lsx",
  })
  @get()
  static getLsx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsx",
  })
  @post("{id}")
  static createLsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
