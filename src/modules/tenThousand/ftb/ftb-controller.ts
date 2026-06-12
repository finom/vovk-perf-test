import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftb")
export default class FtbController {
  @operation({
    summary: "Get Ftb",
  })
  @get()
  static getFtb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftb",
  })
  @post("{id}")
  static createFtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
