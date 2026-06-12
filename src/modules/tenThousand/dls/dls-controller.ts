import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dls")
export default class DlsController {
  @operation({
    summary: "Get Dls",
  })
  @get()
  static getDls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dls",
  })
  @post("{id}")
  static createDls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
