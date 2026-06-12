import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpt")
export default class MptController {
  @operation({
    summary: "Get Mpt",
  })
  @get()
  static getMpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpt",
  })
  @post("{id}")
  static createMpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
