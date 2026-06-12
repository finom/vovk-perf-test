import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcu")
export default class DcuController {
  @operation({
    summary: "Get Dcu",
  })
  @get()
  static getDcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcu",
  })
  @post("{id}")
  static createDcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
