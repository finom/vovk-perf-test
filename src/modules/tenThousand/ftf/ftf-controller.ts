import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftf")
export default class FtfController {
  @operation({
    summary: "Get Ftf",
  })
  @get()
  static getFtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftf",
  })
  @post("{id}")
  static createFtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
