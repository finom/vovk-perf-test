import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpt")
export default class DptController {
  @operation({
    summary: "Get Dpt",
  })
  @get()
  static getDpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpt",
  })
  @post("{id}")
  static createDpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
