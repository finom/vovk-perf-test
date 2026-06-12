import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftq")
export default class FtqController {
  @operation({
    summary: "Get Ftq",
  })
  @get()
  static getFtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftq",
  })
  @post("{id}")
  static createFtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
