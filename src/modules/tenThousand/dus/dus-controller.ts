import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dus")
export default class DusController {
  @operation({
    summary: "Get Dus",
  })
  @get()
  static getDus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dus",
  })
  @post("{id}")
  static createDus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
