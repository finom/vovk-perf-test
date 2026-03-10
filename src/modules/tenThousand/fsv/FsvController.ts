import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsv")
export default class FsvController {
  @operation({
    summary: "Get Fsv",
  })
  @get()
  static getFsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsv",
  })
  @post("{id}")
  static createFsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
