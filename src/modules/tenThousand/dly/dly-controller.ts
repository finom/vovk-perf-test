import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dly")
export default class DlyController {
  @operation({
    summary: "Get Dly",
  })
  @get()
  static getDly = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dly",
  })
  @post("{id}")
  static createDly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
