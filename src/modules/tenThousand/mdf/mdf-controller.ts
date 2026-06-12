import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdf")
export default class MdfController {
  @operation({
    summary: "Get Mdf",
  })
  @get()
  static getMdf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdf",
  })
  @post("{id}")
  static createMdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
