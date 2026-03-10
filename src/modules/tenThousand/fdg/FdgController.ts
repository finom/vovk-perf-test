import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdg")
export default class FdgController {
  @operation({
    summary: "Get Fdg",
  })
  @get()
  static getFdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdg",
  })
  @post("{id}")
  static createFdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
