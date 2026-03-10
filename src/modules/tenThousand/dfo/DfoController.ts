import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfo")
export default class DfoController {
  @operation({
    summary: "Get Dfo",
  })
  @get()
  static getDfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfo",
  })
  @post("{id}")
  static createDfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
